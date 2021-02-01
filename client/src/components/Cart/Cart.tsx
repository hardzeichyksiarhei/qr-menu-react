import React, { useEffect, useState } from 'react'
import { List, Button, Typography } from 'antd'
import { CartProps, OrderUserProps } from '../../utils/propsComponents'
import OrderedDish from '../OrderedDish/OrderedDish'
import './Cart.scss'

const { Title } = Typography
function Cart({ orederUser, dishCountIncrease, dishCountReduce, deleteDish }: CartProps) {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const calcTotalPrice = (orederUser: OrderUserProps[]) => {
    let sum: number = 0
    orederUser.forEach((item) => {
      sum = sum + item.count * item.dish.priceValue
    })
    return sum
  }
  useEffect(() => {
    setTotalPrice(calcTotalPrice(orederUser))
  }, [orederUser])
  return (
    <>
      <h2>YOUR ORDER</h2>
      <List
        className="User order"
        bordered
        dataSource={orederUser}
        renderItem={(item: any) => (
          <List.Item style={{ padding: '0' }} key={item.dish.id}>
            <OrderedDish
              key={item.dish.id}
              dish={item}
              dishCountReduce={dishCountReduce}
              dishCountIncrease={dishCountIncrease}
              deleteDish={deleteDish}
            />
          </List.Item>
        )}
      />
      <Title level={4} className="cart__title">
        <span>Total:</span>
        <span>{totalPrice} USD</span>
      </Title>

      <Button>I`m inside the place</Button>
    </>
  )
}

export default Cart
