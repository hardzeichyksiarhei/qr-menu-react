import React from 'react'
import { Button, Typography } from 'antd'
import { OrderDishProps } from '../../utils/propsComponents'
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import './OrderedDish.css'

const { Title } = Typography

function OrderedDish({ dish, dishCountIncrease, dishCountReduce, deleteDish }: OrderDishProps) {
  function dishDelete() {
    deleteDish(dish.dish)
  }
  function countIncreaseDish() {
    dishCountIncrease(dish.dish)
  }
  function countReduceDish() {
    dishCountReduce(dish.dish)
  }
  return (
    <div className="order-dish">
      <div className="order-dish__info">
        <Title level={3} className="order-dish__title">
          {dish.dish.title}
        </Title>
      </div>
      <div className="order-dish__management">
        {dish.count > 1 ? (
          <Button onClick={countReduceDish} icon={<MinusCircleOutlined />}></Button>
        ) : (
          <></>
        )}

        <span className="order-dish__count">{dish.count}</span>
        <Button onClick={countIncreaseDish} icon={<PlusCircleOutlined />}></Button>
        <Button
          className="btn__delete-dish"
          onClick={dishDelete}
          icon={<DeleteOutlined />}
        ></Button>
      </div>
    </div>
  )
}

export default OrderedDish
