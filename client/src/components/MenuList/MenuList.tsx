import React from 'react'
import { MenuListProps, MenuProps } from '../../utils/propsComponents'
import CardMenu from '../CardMenu/CardMenu'

function MenuList({ menus, choiceMenu }: MenuListProps) {
  function menuClick(menu: MenuProps) {
    choiceMenu(menu)
  }

  return (
    <>
      {menus.map((menu) => {
        return <CardMenu key={menu.id} menu={menu} clickMenu={menuClick} />
      })}
    </>
  )
}

export default MenuList
