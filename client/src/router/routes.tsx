import React, { lazy } from 'react'

import DefaultLayout from '../layouts/Default'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const MenuCategory = lazy(() => import('../pages/Category'))
const MenuDish = lazy(() => import('../pages/Dish'))
const Cart = lazy(() => import('../components/Cart/Cart'))

const routes = () => [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/menu/:menuId', element: <MenuCategory /> },
      { path: '/menu/:menuId/category/:dishId', element: <MenuDish /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]

export default routes
