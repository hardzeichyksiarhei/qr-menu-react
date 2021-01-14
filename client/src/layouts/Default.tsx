import React from 'react'
import Header from '../components/Header/Header'
import MenuCategory from '../components/MenuCategory/MenuCategory'
import MenuList from '../components/MenuList/MenuList'
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
const Default = () => {
  return (
    <>
      <Header />
      {/* <Switch>
//         <Route path="/menus/:id"> */}
      {/* <MenuBar /> */}
      {/* </Route>
//         <Route path="/"> */}
      <MenuList />
      <MenuCategory />
      {/* </Route>
//       </Switch> */}
    </>
  )
}

export default Default
