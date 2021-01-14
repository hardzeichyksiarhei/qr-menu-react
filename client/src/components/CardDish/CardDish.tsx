import React from 'react'
import { Card } from 'antd'
import './CardDish.scss'
const { Meta } = Card
type CardDishProps = { dish: any }
function CardDish({ dish }: CardDishProps) {
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
