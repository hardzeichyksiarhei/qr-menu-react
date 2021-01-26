import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuListProps } from '../../utils/propsComponents'
import CardMenu from '../CardMenu/CardMenu'

function MenuList({ menus }: MenuListProps) {
  return (
    <>
      {menus.map((menu) => {
        return (
          <NavLink key={menu.id} to={`/menu=${menu.id}`}>
            <CardMenu key={menu.id} menu={menu} />
          </NavLink>
        )
      })}
    </>
  )
}

export default MenuList
