import React, { useEffect, useMemo, useState } from 'react'
import Header from '../Header/Header'
import MenuBar from '../Navigation/Navigation'
import Cart from '../Cart/Cart'
import { Dish, orderUserProps } from '../../utils/propsComponents'

function CategoryPage() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('orderUser') || '[]'))
  const [countUserOrder, setCountUserOrder] = useState(0)
  useEffect(() => {
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
    setCountUserOrder(countOrderDish)
  }, [orderUser])
  const countOrderDish = useMemo(() => {
    let count: number = 0
    orderUser.forEach((item: { dish: Dish, count: number }) => (count += item.count))
    return count
  }, [orderUser])
  console.log(countOrderDish)
  const addDish = (dish: Dish) => {
    console.log(dish)
    setOrderUser((orderUser: orderUserProps) => {
      const resultOrder: any = orderUser.forEach((item: { dish: Dish, count: number }) => {
        if (item.dish.id === dish.id) {
          item.count = item.count + 1
          return item
        }
        return item
      })
      return resultOrder
    })
  }
  const deleteDish = (dish: Dish) => {
    const definedDish = orderUser.findIndex((item: any) => item.id === dish.id)
    if (definedDish >= 0) {
      setOrderUser((orderUser: Dish[]) => orderUser.splice(definedDish, 1))
    }
  }

  // const getCountDish = (orderUser: any) => {
  //   const result: any = {}
  //   orderUser.forEach((dish: Dish) => (result[dish.id] ? result[dish.id]++ : (result[dish.id] = 1)))
  //   return Object.keys(result).map((item) => {
  //     return {
  //       dish: orderUser.find((dish: Dish) => dish.id === item),
  //       count: result[item],
  //     }
  //   })
  // }

  return (
    <>
      <Header countOrder={countUserOrder} />
      <Cart addDish={addDish} orederUser={orderUser} deleteDish={deleteDish} />
      <MenuBar />
    </>
  )
}

export default CategoryPage
