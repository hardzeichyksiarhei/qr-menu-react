import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuList from '../MenuList/MenuList'

import { MENUS } from '../../MENU/MENU'
import menusService from '../../services/menus'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'
import MenuCategory from '../MenuCategory/MenuCategory'

function DashboardPage() {
  const orderUser = JSON.parse(localStorage.getItem('orderUser') || '[]')
  const [countOrderDish, setCountOrderDish] = useState(0)
  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
  }, [orderUser])
  return (
    <>
      <Header countOrder={countOrderDish} />
      <MenuList menus={MENUS} />
    </>
  )
}
export default DashboardPage
