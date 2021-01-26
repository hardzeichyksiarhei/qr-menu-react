import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuCategory from '../MenuCategory/MenuCategory'
import MenuBar from '../Navigation/Navigation'

import { MENUS } from '../../MENU/MENU'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'

function CategoryPage() {
  const orderUser = JSON.parse(localStorage.getItem('orderUser') || '[]')
  const [countOrderDish, setCountOrderDish] = useState(0)
  const search = window.location.pathname
    .substr(1)
    .split('/')
    .reduce(function (res: any, a) {
      const t = a.split('=')
      res[decodeURIComponent(t[0])] = t.length === 1 ? null : decodeURIComponent(t[1])
      return res
    }, {})
  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const category: any = MENUS.find((item) => item.id === +search.menu)
  return (
    <>
      <Header countOrder={countOrderDish} />
      <MenuCategory categoryMenu={category.categories} menuId={category.id} />
      <MenuBar />
    </>
  )
}

export default CategoryPage
