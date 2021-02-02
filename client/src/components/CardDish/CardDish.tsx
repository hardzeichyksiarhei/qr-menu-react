import React from 'react'
import { Card } from 'antd'
import './CardDish.scss'
import { CardDishProps } from '../../utils/propsComponents'
const { Meta } = Card

function CardDish({ dish, priceCurrency }: CardDishProps) {
  const title = `${dish.title}`
  const price = `${dish.priceValue ? `${dish.priceValue} ${priceCurrency}` : `Free`}`
  return (
    <Card bodyStyle={{ padding: '0' }} bordered={false}>
      <Meta className="dish__title" title={`${title} ${price}`} />
    </Card>
  )
}

export default CardDish
