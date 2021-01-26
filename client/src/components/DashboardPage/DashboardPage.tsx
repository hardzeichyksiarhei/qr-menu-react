import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuList from '../MenuList/MenuList'

import { MENUS } from '../../MENU/MENU'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'

function DashboardPage() {
  const orderUser = JSON.parse(localStorage.getItem('orderUser') || '[]')
  const [countOrderDish, setCountOrderDish] = useState(0)
  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header countOrder={countOrderDish} />
      <MenuList menus={MENUS} />
    </>
  )
}
export default DashboardPage
