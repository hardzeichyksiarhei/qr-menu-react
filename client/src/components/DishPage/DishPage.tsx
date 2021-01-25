import React, { useMemo, useState } from 'react'
import Header from '../Header/Header'
// import { Route } from 'react-router-dom'

import MenuDish from '../MenuDish/MenuDish'

// localStorage.clear()
import { MENUS } from '../../MENU/MENU'
import { Dish } from '../../utils/propsComponents'
import MenuBar from '../Navigation/Navigation'

function Default() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  const [categoryMenu, setCategoryMenu] = useState([])
  const [dish, setDish] = useState<Dish | null>(null)
  const choiceMenu = (menu: any) => {
    setCategoryMenu(menu.categories)
  }
  const choiceDish = (dish: Dish) => {
    setDish(dish)
  }
  const addDish = (dish: Dish) => {
    orderUser.push(dish)
    setOrderUser(orderUser)
    localStorage.setItem('order', JSON.stringify(orderUser))
  }
  return (
    <>
      <Header countOrder={orderUser.length} />

      {/* <MenuDish dish={dish} addDish={addDish} /> */}

      <MenuBar />
    </>
  )
}
export default Default
