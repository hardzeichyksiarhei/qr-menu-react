import React, { useState } from 'react'

import Header from '../Header/Header'

import MenuList from '../MenuList/MenuList'

import { MENUS } from '../../MENU/MENU'

function DashboardPage() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  const choiceMenu = (menu: any) => {
    // setCategoryMenu(menu.categories)
  }

  return (
    <>
      <Header countOrder={orderUser.length} />
      <MenuList menus={MENUS} choiceMenu={choiceMenu} />
    </>
  )
}
export default DashboardPage
