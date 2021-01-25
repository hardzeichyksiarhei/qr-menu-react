import React from 'react'
import { List, Button, Typography } from 'antd'
import { CartProps } from '../../utils/propsComponents'
import OrderedDish from '../OrderedDish/OrderedDish'
import './Cart.scss'

const { Title } = Typography
function Cart({ orederUser, addDish, deleteDish }: CartProps) {
  return (
    <>
      <h2>YOUR ORDER</h2>
      <List
        className="User order"
        bordered
        dataSource={orederUser}
        renderItem={(item: any) => (
          <List.Item style={{ padding: '0' }} key={item.dish.id}>
            <OrderedDish key={item.dish.id} dish={item} addDish={addDish} deleteDish={deleteDish} />
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
