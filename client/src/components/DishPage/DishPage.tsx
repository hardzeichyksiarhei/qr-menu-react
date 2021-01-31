import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Header from '../Header/Header'
import MenuDish from '../MenuDish/MenuDish'
import menusService from '../../services/menus'
import { Dish, MenuProps, OrderUserProps } from '../../utils/propsComponents'
import MenuBar from '../Navigation/Navigation'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'
import { useParams } from 'react-router-dom'

function DishPage() {
  const [orderUser, setOrderUser] = useState<OrderUserProps[]>(
    JSON.parse(localStorage.getItem('orderUser') || '[]'),
  )
  const [countOrderDish, setCountOrderDish] = useState(0)
  const [menus, setMenus] = useState<MenuProps[]>([])
  const getMenus = async () => {
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
    getMenus()
  }, [])
  const { menuId, categoryId, dishId } = useParams()
  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
  }, [orderUser])

  const menu = useMemo<MenuProps | undefined>(() => {
    return menus.find((item) => item.id === menuId)
  }, [menus, menuId])
  const dish = useMemo<Dish | undefined>(() => {
    if (!menu) {
      return undefined
    }
    return menu.categories
      .find((category) => category.id === categoryId)
      ?.dishes.find((dish) => dish.id === dishId)
  }, [menu, categoryId, dishId])
  const saveOrder = useCallback(() => {
    localStorage.setItem('orderUser', JSON.stringify(orderUser))
  }, [orderUser])

  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
    saveOrder()
  }, [orderUser, saveOrder])
  const addDish = (dish: Dish) => {
    const orderTry: any = orderUser.find(
      (item: { dish: Dish, count: number }) => item.dish.id === dish.id,
    )
    if (orderTry) {
      setOrderUser([
        ...orderUser.map((item) => {
          if (item.dish.id === dish.id) {
            item.count = item.count + 1
          }
          return item
        }),
      ])
    } else {
      setOrderUser([...orderUser, { dish: dish, count: 1 }])
    }
  }

  return (
    <>
      <Header countOrder={countOrderDish} />
      {dish && <MenuDish dish={dish} addDish={addDish} />}
      <MenuBar />
    </>
  )
}
export default DishPage
