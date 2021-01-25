import React, { useState } from 'react'
import { Dish } from '../../utils/propsComponents'
import Header from '../Header/Header'
import MenuCategory from '../MenuCategory/MenuCategory'
import MenuBar from '../Navigation/Navigation'

function CategoryPage() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  const categoryMenu = []
  const choiceDish = 111
  const addDish = (dish: Dish) => {
    setOrderUser((orderUser: Dish[]) => [...orderUser, dish])
    localStorage.setItem('order', JSON.stringify(orderUser))
  }
  const getCountDish = (orderUser: any) => {
    const result: any = {}
    orderUser.forEach((dish: Dish) => (result[dish.id] ? result[dish.id]++ : (result[dish.id] = 1)))
    return Object.keys(result).map((item) => {
      return {
        id: orderUser.find((dish: Dish) => dish.id === item),
        sum: result[item],
      }
    })
  }
  return (
    <>
      <Header countOrder={orderUser.length} />
      {/* <MenuCategory categoryMenu={categoryMenu} choiceDish={choiceDish} /> */}
      <MenuBar />
    </>
  )
}

export default CategoryPage
