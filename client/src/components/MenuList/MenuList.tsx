import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import menusService from '../../services/menus'
import CardMenu from '../CardMenu/CardMenu'
import { MenuProps } from '../../utils/propsComponents'

function MenuList() {
  const [menus, setMenus] = useState<MenuProps[]>([])
  const menu = async () => {
    await menusService
      .getById('6000a32e85ed5f1094076150')
      .then((menu) => {
        setMenus(menu)
      })
      .catch(() => {
        console.log('Не удалось загрузить меню')
      })
  }
  useEffect(() => {
    menu()
  }, [])
  console.log(menus)
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
