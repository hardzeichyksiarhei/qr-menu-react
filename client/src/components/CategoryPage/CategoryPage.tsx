import React, { useState } from 'react'
import { Dish, MenuProps } from '../../utils/propsComponents'
import Header from '../Header/Header'
import MenuCategory from '../MenuCategory/MenuCategory'
import MenuBar from '../Navigation/Navigation'

import { MENUS } from '../../MENU/MENU'

function CategoryPage() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  const search = window.location.pathname
    .substr(1)
    .split('/')
    .reduce(function (res: any, a) {
      const t = a.split('=')
      res[decodeURIComponent(t[0])] = t.length === 1 ? null : decodeURIComponent(t[1])
      return res
    }, {})

  const category: any = MENUS.find((item) => item.id === +search.menu)
  //   const addDish = (dish: Dish) => {
  //     setOrderUser((orderUser: Dish[]) => [...orderUser, dish])
  //     localStorage.setItem('order', JSON.stringify(orderUser))
  //   }
  //   const getCountDish = (orderUser: any) => {
  //     const result: any = {}
  //     orderUser.forEach((dish: Dish) => (result[dish.id] ? result[dish.id]++ : (result[dish.id] = 1)))
  //     return Object.keys(result).map((item) => {
  //       return {
  //         id: orderUser.find((dish: Dish) => dish.id === item),
  //         sum: result[item],
  //       }
  //     })
  //   }
  const choiceDish = () => {}
  return (
    <>
      <Header countOrder={orderUser.length} />
      <MenuCategory categoryMenu={category.categories} choiceDish={choiceDish} />
      <MenuBar />
    </>
  )
}

export default CategoryPage
