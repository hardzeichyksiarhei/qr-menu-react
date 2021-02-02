import React, { useEffect, useState } from 'react'
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
  const dishCountIncrease = (dish: Dish) => {
    orderUser.map((item: { dish: Dish, count: number }) => {
      if (item.dish.id === dish.id) {
        return (item.count = item.count + 1)
      }
      return item
    })
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
    setCountOrderDish(renderCountOrderDish(orderUser))
  }
  const dishCountReduce = (dish: Dish) => {
    orderUser.map((item: { dish: Dish, count: number }) => {
      if (item.dish.id === dish.id) {
        return (item.count = item.count - 1)
      }
      return item
    })
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
    setCountOrderDish(renderCountOrderDish(orderUser))
  }
  const deleteDish = (dish: Dish) => {
    const index = orderUser.findIndex(
      (item: { dish: Dish, count: number }) => item.dish.id === dish.id,
    )
    orderUser.splice(index, 1)
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
    setCountOrderDish(renderCountOrderDish(orderUser))
  }
  return (
    <Cart
      dishCountIncrease={dishCountIncrease}
      dishCountReduce={dishCountReduce}
      orederUser={orderUser}
      deleteDish={deleteDish}
    />
  )
}

export default CategoryPage
