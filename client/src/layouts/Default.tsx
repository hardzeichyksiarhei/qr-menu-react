import React, { useMemo, useState } from 'react'
import Header from '../components/Header/Header'
import MenuCategory from '../components/MenuCategory/MenuCategory'
import MenuList from '../components/MenuList/MenuList'
import MenuDish from '../components/MenuDish/MenuDish'
// import MenuBar from '../components/Navigation/Navigation'

// const routes = [
//   {
//     path: '/dashboard',
//     label: 'Dashboard',
//     icon: <DashboardOutlined />,
//   },
//   {
//     path: '/menus',
//     label: 'My menus',
//     icon: <AppstoreAddOutlined />,
//   },
//   {
//     path: '/menus/trash',
//     label: 'Trash Menu',
//     icon: <DeleteOutlined />,
//   },
//   {
//     path: '/settings',
//     label: 'Settings',
//     icon: <SettingOutlined />,
//   },
// ]
// localStorage.clear()
import { MENUS } from '../MENU/MENU'
import { Dish } from '../utils/propsComponents'
import Cart from '../components/Cart/Cart'

function Default() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  const [categoryMenu, setCategoryMenu] = useState([])
  const [dish, setDish] = useState<Dish | null>(null)
  const choiceMenu = (menu: any) => {
    setCategoryMenu(menu.categories)
  }
  const choiceDish = (dish: Dish) => {
    setDish(dish)
  }
  const addDish = (dish: Dish) => {
    orderUser.push(dish)
    setOrderUser(orderUser)
    localStorage.setItem('order', JSON.stringify(orderUser))
  }
  const deleteDish = (dish: Dish) => {
    const definedDish = orderUser.findIndex((item: any) => item.id === dish.id)
    if (definedDish >= 0) {
      orderUser.splice(definedDish, 1)
      setOrderUser(orderUser)
      localStorage.setItem('order', JSON.stringify(orderUser))
    }
  }
  const counrOrder = useMemo(() => orderUser.length, [orderUser.length])
  return (
    <>
      <Header counrOrder={counrOrder} />
      {/* <Switch>
//         <Route path="/menus/:id"> */}
      {/* <MenuBar /> */}
      {/* </Route>
//         <Route path="/"> */}
      <MenuList menus={MENUS} choiceMenu={choiceMenu} />
      <MenuCategory categoryMenu={categoryMenu} choiceDish={choiceDish} />

      {dish && <MenuDish dish={dish} addDish={addDish} />}
      <Cart orderUser={orderUser} addDish={addDish} deleteDish={deleteDish} />
      {/* </Route>
//       </Switch> */}
    </>
  )
}

export default Default
