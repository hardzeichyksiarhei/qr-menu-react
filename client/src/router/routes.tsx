import React, { lazy } from 'react'

import DefaultLayout from '../layouts/Default'
// let LayoutDefault : InstanceType< DefaultLayout >;

// const Settings = lazy(() => import('../pages/Settings'))

const MenuCategory = lazy(() => import('../components/MenuCategory/MenuCategory'))
const MenuDish = lazy(() => import('../components/MenuDish/MenuDish'))
const Cart = lazy(() => import('../components/Cart/Cart'))

const routes = () => [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      //   { path: '/category/:id', element: <MenuCategory /> },
      //   { path: '/dish', element: <MenuDish /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]

export default routes
