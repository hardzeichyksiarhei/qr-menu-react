import React, { useEffect, useMemo, useState } from 'react'
import Header from '../Header/Header'
import menusService from '../../services/menus'
import MenuCategory from '../MenuCategory/MenuCategory'
import MenuBar from '../Navigation/Navigation'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'
import { useParams } from 'react-router-dom'
import { MenuProps } from '../../utils/propsComponents'

function CategoryPage() {
  const orderUser = JSON.parse(localStorage.getItem('orderUser') || '[]')
  const [countOrderDish, setCountOrderDish] = useState(0)
  const [menus, setMenus] = useState<MenuProps[]>([])
  const {userId, menuId } = useParams()
  const getMenus = async () => {
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
    getMenus()
  }, [])
  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
  }, [orderUser])
  const menu = useMemo<MenuProps | undefined>(() => {
    return menus.find((item) => item.id === menuId)
  }, [menus, menuId])
  return (
    <>
      <Header countOrder={countOrderDish} />
      {menu && <MenuCategory categoryMenu={menu.categories} menuId={menu.id} />}
      <MenuBar />
    </>
  )
}

export default CategoryPage
