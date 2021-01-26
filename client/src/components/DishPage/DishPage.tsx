import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuDish from '../MenuDish/MenuDish'
import { MENUS } from '../../MENU/MENU'
import { Dish } from '../../utils/propsComponents'
import MenuBar from '../Navigation/Navigation'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'

function DishPage() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('orderUser') || '[]'))
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
  const saveOrder = () => {
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
  }

  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
    saveOrder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderUser])
  const addDish = (dish: Dish) => {
    const orderTry: any = orderUser.find(
      (item: { dish: Dish, count: number }) => item.dish.id === dish.id,
    )
    if (orderTry) {
      // setOrderUser((orderUser: { dish: Dish, count: number }[]) => {
      orderUser.map((item: { dish: Dish, count: number }) => {
        if (item.dish.id === dish.id) {
          return (item.count = item.count + 1)
        }
        return item
      })
      // })
      saveOrder()
    } else {
      setOrderUser((orderUser: { dish: Dish, count: number }[]) => [
        ...orderUser,
        { dish: dish, count: 1 },
      ])
    }
    setCountOrderDish(renderCountOrderDish(orderUser))
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
