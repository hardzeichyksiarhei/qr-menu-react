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
      <Button onClick={clickDish} key="1">
        Add dish
      </Button>
    </>
  )
}

export default MenuDish
