import React from 'react'
import { Card } from 'antd'
import './CardDish.scss'
import { CardDishProps } from '../../utils/propsComponents'
const { Meta } = Card

function CardDish({ dish, choiceDish }: CardDishProps) {
  const clickDish = () => {
    choiceDish(dish)
  }
  return (
    <Card
      className="category"
      style={{ padding: '0', width: '100%', border: 'none', cursor: 'pointer' }}
      onClick={clickDish}
    >
      <Meta className="dish__title" title={dish.title} />
    </Card>
  )
}

export default CardDish
