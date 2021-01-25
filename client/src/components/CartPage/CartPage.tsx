import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuBar from '../Navigation/Navigation'
import Cart from '../Cart/Cart'
import { Dish } from '../../utils/propsComponents'

function CategoryPage() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(orderUser))
  }, [orderUser])
  const addDish = (dish: Dish) => {
    setOrderUser((orderUser: Dish[]) => [...orderUser, dish])
  }
  const deleteDish = (dish: Dish) => {
    const definedDish = orderUser.findIndex((item: any) => item.id === dish.id)
    if (definedDish >= 0) {
      setOrderUser((orderUser: Dish[]) => orderUser.splice(definedDish, 1))
    }
  }
  const getCountDish = (orderUser: any) => {
    const result: any = {}
    orderUser.forEach((dish: Dish) => (result[dish.id] ? result[dish.id]++ : (result[dish.id] = 1)))
    return Object.keys(result).map((item) => {
      return {
        dish: orderUser.find((dish: Dish) => dish.id === item),
        count: result[item],
      }
    })
  }
  return (
    <>
      <Header countOrder={orderUser.length} />
      <Cart addDish={addDish} orederUser={getCountDish(orderUser)} deleteDish={deleteDish} />
      <MenuBar />
    </>
  )
}

export default CategoryPage
