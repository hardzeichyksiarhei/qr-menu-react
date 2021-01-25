import React, { useState } from 'react'
import Header from '../Header/Header'
import MenuList from '../MenuList/MenuList'

import { MENUS } from '../../MENU/MENU'

function DashboardPage() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))

  return (
    <>
      <Header countOrder={orderUser.length} />
      <MenuList menus={MENUS} />
    </>
  )
}
export default DashboardPage
