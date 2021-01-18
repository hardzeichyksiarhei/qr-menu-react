import React from 'react'
import { Button } from 'antd'
import { MenuDishProps } from '../../utils/propsComponents'

function MenuDish({ dish, addDish }: MenuDishProps) {
  function clickDish() {
    addDish(dish)
  }
  return (
    <>
      <h2>{dish.title}</h2>
      <p>{dish.description}</p>
      <Button onClick={clickDish}>Add dish</Button>
    </>
  )
}

export default MenuDish
