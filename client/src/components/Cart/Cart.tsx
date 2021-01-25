import React, { useState } from 'react'
import { List, Button, Typography } from 'antd'
import { Dish } from '../../utils/propsComponents'
import OrderedDish from '../OrderedDish/OrderedDish'
import './Cart.scss'

import Header from '../Header/Header'

const { Title } = Typography
function Cart() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  const addDish = (dish: Dish) => {
    setOrderUser((orderUser: Dish[]) => [...orderUser, dish])
    localStorage.setItem('order', JSON.stringify(orderUser))
  }
  const deleteDish = (dish: Dish) => {
    const definedDish = orderUser.findIndex((item: any) => item.id === dish.id)
    if (definedDish >= 0) {
      setOrderUser((orderUser: Dish[]) => orderUser.splice(definedDish, 1))
      localStorage.setItem('order', JSON.stringify(orderUser))
    }
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
      <h2>YOUR ORDER</h2>
      <List
        className="User order"
        bordered
        dataSource={getCountDish(orderUser)}
        renderItem={(dish: any) => (
          <List.Item style={{ padding: '0' }} key={dish.id.id}>
            <OrderedDish key={dish.id.id} dish={dish} addDish={addDish} deleteDish={deleteDish} />
          </List.Item>
        )}
      />
      <Title level={4} className="cart__title">
        Total: {}
      </Title>

      <Button>I`m inside the place</Button>
    </>
  )
}

export default Cart
