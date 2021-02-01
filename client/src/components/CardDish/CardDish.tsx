import React from 'react'
import { Card } from 'antd'
import './CardDish.scss'
import { CardDishProps } from '../../utils/propsComponents'
const { Meta } = Card

function CardDish({ dish, priceCurrency }: CardDishProps) {
  console.log(dish)
  return (
    <Card style={{ padding: '0', width: '100%', border: 'none', cursor: 'pointer' }}>
      <div>
        <h3 className="dish__title">{dish.title}</h3>
        <p>
          {dish.priceValue} {priceCurrency}
        </p>
      </div>
    </Card>
  )
}

export default CardDish
