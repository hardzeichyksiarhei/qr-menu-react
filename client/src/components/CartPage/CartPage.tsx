import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuBar from '../Navigation/Navigation'
import Cart from '../Cart/Cart'
import { Dish } from '../../utils/propsComponents'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'

function CategoryPage() {
  let orderUser = JSON.parse(localStorage.getItem('orderUser') || '[]')
  const [countOrderDish, setCountOrderDish] = useState(0)
  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const addDish = (dish: Dish) => {
    orderUser.map((item: { dish: Dish, count: number }) => {
      if (item.dish.id === dish.id) {
        return (item.count = item.count + 1)
      }
      return item
    })
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
    setCountOrderDish(renderCountOrderDish(orderUser))
  }
  const deleteDish = (dish: Dish) => {
    orderUser.map((item: { dish: Dish, count: number }) => {
      if (item.dish.id === dish.id) {
        return (item.count = item.count - 1)
      }
      return item
    })
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
    setCountOrderDish(renderCountOrderDish(orderUser))
  }
  return (
    <>
      <Header countOrder={countOrderDish} />
      <Cart addDish={addDish} orederUser={orderUser} deleteDish={deleteDish} />
      <MenuBar />
    </>
  )
}

export default CategoryPage
