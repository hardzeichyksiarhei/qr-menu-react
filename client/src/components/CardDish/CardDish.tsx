import React from 'react'
import { Card } from 'antd'
import './CardDish.scss'
import { dishProps } from '../../utils/propsComponents'
const { Meta } = Card

function CardDish({ dish }: dishProps) {
  const clickDish = () => {
    console.log(dish)
  }
  return (
    <Card
      className="category"
      style={{ padding: '0', width: '100%', border: 'none' }}
      onClick={clickDish}
    >
      <Meta className="dish__title" title={dish.title} />
    </Card>
  )
}

export default CardDish
