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
type DefaultProps = {
  menu: {
    id: number,
    title: string,
    photo: string,
    categories: { dish: { title: string }[], title: string, photo: string }[],
  },
  categories: { dish: { title: string }[], title: string, photo: string }[],
  categoryMenu: { dish: { title: string }[], title: string, photo: string }[],
}
const Default = () => {
  const orderUser = JSON.parse(localStorage.getItem('order') || '[]')
  const [categoryMenu, setCategoryMenu] = useState([])
  const [dish, setDish] = useState({
    title: 'Soup title 1',
  }) // поменять на {}
  const choiceMenu = (menu: any) => {
    const categories = menu.categories
    console.log(categories)
    // setCategoryMenu(menu.categories)
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
      <MenuCategory categoryMenu={categoryMenu} />
      <MenuDish dish={dish} />
      {/* </Route>
//       </Switch> */}
    </>
  )
}

export default Default
