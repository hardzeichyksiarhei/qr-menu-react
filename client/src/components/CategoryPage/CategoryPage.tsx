import React, { useState } from 'react'
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
  return (
    <>
      <Header countOrder={orderUser.length} />
      <MenuCategory categoryMenu={category.categories} menuId={category.id} />
      <MenuBar />
    </>
  )
}

export default CategoryPage
