import React from 'react'
import { List, Button, Typography } from 'antd'
import { CartProps, Dish } from '../../utils/propsComponents'
import OrderedDish from '../OrderedDish/OrderedDish'
import './Cart.scss'

const { Title } = Typography
function Cart({ orderUser, deleteDish, addDish }: CartProps) {
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
