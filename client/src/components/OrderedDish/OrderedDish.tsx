import React from 'react'
import { Button, Typography } from 'antd'
import { OrderDishProps } from '../../utils/propsComponents'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import './OrderedDish.css'

const { Title } = Typography

function OrderedDish({ dish, deleteDish, addDish }: OrderDishProps) {
  function dishDelete() {
    deleteDish(dish.dish)
  }
  function dishAdd() {
    addDish(dish.dish)
  }
  return (
    <div className="order-dish">
      <div className="order-dish__info">
        <Title level={3} className="order-dish__title">
          {dish.dish.title}
        </Title>
      </div>
      <div className="order-dish__management">
        <Button onClick={dishDelete} icon={<MinusCircleOutlined />}></Button>
        <span className="order-dish__count">{dish.count}</span>
        <Button onClick={dishAdd} icon={<PlusCircleOutlined />}></Button>
      </div>
    </div>
  )
}

export default OrderedDish
