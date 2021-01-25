import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuDish from '../MenuDish/MenuDish'
import { MENUS } from '../../MENU/MENU'
import { Dish } from '../../utils/propsComponents'
import MenuBar from '../Navigation/Navigation'

function DishPage() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(orderUser))
  }, [orderUser])
  const search = window.location.pathname
    .substr(1)
    .split('/')
    .reduce(function (res: any, a) {
      const t = a.split('=')
      res[decodeURIComponent(t[0])] = t.length === 1 ? null : decodeURIComponent(t[1])
      return res
    }, {})
  const category: any = MENUS.find((item) => item.id === +search.menu)
  let dish: any
  category.categories.forEach((item: any) => {
    item.dishes.forEach((item: Dish) => {
      if (item.id === search.dish) {
        return (dish = item)
      }
    })
  })
  const addDish = (dish: Dish) => {
    setOrderUser((orderUser: Dish[]) => [...orderUser, dish])
  }

  return (
    <>
      <Header countOrder={orderUser.length} />

      <MenuDish dish={dish} addDish={addDish} />

      <MenuBar />
    </>
  )
}
export default DishPage
