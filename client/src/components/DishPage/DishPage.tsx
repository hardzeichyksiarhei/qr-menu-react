import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuDish from '../MenuDish/MenuDish'
import { MENUS } from '../../MENU/MENU'
import { Dish, OrderUserProps } from '../../utils/propsComponents'
import MenuBar from '../Navigation/Navigation'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'

function DishPage() {
  const [orderUser, setOrderUser] = useState<OrderUserProps[]>(
    JSON.parse(localStorage.getItem('orderUser') || '[]'),
  )
  // let orderUser
  const [countOrderDish, setCountOrderDish] = useState(0)
  const search = window.location.pathname
    .substr(1)
    .split('/')
    .reduce(function (res: any, a) {
      const t = a.split('=')
      res[decodeURIComponent(t[0])] = t.length === 1 ? null : decodeURIComponent(t[1])
      return res
    }, {})
  const category: any = MENUS.find((item) => item.id === +search.menu)
  let dish: any
  category.categories.forEach((item: any) => {
    item.dishes.forEach((item: Dish) => {
      if (item.id === search.dish) {
        return (dish = item)
      }
    })
  })
  const saveOrder = useCallback(() => {
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
  }, [orderUser])

  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
    saveOrder()
  }, [orderUser, saveOrder])
  const addDish = (dish: Dish) => {
    const orderTry: any = orderUser.find(
      (item: { dish: Dish, count: number }) => item.dish.id === dish.id,
    )
    if (orderTry) {
      setOrderUser([
        ...orderUser.map((item) => {
          if (item.dish.id === dish.id) {
            item.count = item.count + 1
          }
          return item
        }),
      ])
    } else {
      setOrderUser([...orderUser, { dish: dish, count: 1 }])
    }
  }

  return (
    <>
      <Header countOrder={countOrderDish} />
      <MenuDish dish={dish} addDish={addDish} />
      <MenuBar />
    </>
  )
}
export default DishPage
