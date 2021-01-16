import React, { useState } from 'react'
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
import { menu } from '../MENU/MENU'
import { dishProps } from '../utils/propsComponents'
type DefaultProps = {
  menu: {
    id: number,
    title: string,
    photo: string,
    categories: { dishes: { title: string }[], title: string, photo: string }[],
  },
  categories: { dishes: { id: string, title: string }[], title: string, photo: string }[],
  categoryMenu: { dishes: { title: string }[], title: string, photo: string }[],
}
function Default() {
  const [orderUser, setOrderUser] = useState(JSON.parse(localStorage.getItem('order') || '[]'))
  const [categoryMenu, setCategoryMenu] = useState([])
  const [dish, setDish] = useState({})
  const choiceMenu = (menu: any) => {
    setCategoryMenu(menu.categories)
  }
  const choiceDish = (dish: any) => {
    setDish(dish)
  }
  const addDish = (dish: any) => {
    setOrderUser(orderUser.push(dish))
    localStorage.setItem('order', JSON.stringify(orderUser))
  }
  return (
    <>
      <Header orderUser={orderUser} />
      {/* <Switch>
//         <Route path="/menus/:id"> */}
      {/* <MenuBar /> */}
      {/* </Route>
//         <Route path="/"> */}
      <MenuList menus={menu} choiceMenu={choiceMenu} />
      <MenuCategory categoryMenu={categoryMenu} choiceDish={choiceDish} />
      <MenuDish dish={dish} addDish={addDish} />
      {/* </Route>
//       </Switch> */}
    </>
  )
}

export default Default
