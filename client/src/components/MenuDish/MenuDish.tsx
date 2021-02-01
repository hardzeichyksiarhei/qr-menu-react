import React from 'react'
import { Button } from 'antd'
import { MenuDishProps } from '../../utils/propsComponents'
import './MenuDish.scss'

function MenuDish({ dish, addDish, priceCurrency }: MenuDishProps) {
  const price = `${dish.priceValue ? `${dish.priceValue} ${priceCurrency}` : `Free`}`
  function clickDish() {
    addDish(dish)
  }

  return (
    <div className="dish__info">
      <h2>{dish.title}</h2>
      <p className="dish__title">{dish.description}</p>
      <h3 className="dish__price">Price: {price}</h3>
      <Button onClick={clickDish}>Add dish</Button>
    </div>
  )
}

export default MenuDish
