import React from 'react'
import { Card } from 'antd'
import './CardDish.scss'
import { CardDishProps } from '../../utils/propsComponents'
const { Meta } = Card

function CardDish({ dish }: CardDishProps) {
  return (
    <Card style={{ padding: '0', width: '100%', border: 'none', cursor: 'pointer' }}>
      <Meta className="dish__title" title={dish.title} />
    </Card>
  )
}

export default CardDish
