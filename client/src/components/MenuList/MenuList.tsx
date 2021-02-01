import React, { useEffect, useState } from 'react'
import { NavLink, useParams, Link } from 'react-router-dom'
import menusService from '../../services/menus'
import CardMenu from '../CardMenu/CardMenu'
import { MenuProps } from '../../utils/propsComponents'


function MenuList() {
  const [menus, setMenus] = useState<MenuProps[]>([])
  const {userId} = useParams()
  const menu = async () => {
    await menusService
      .getById(userId)

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
  return (
    <>
      {menus.map((menu) => {
        return (
          <Link key={menu.id} to={`${userId}/menu/${menu.id}`}>
            <CardMenu key={menu.id} menu={menu} />
          </Link>
        )
      })}
    </>
  )
}

export default MenuList
