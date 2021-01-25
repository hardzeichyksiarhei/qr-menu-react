import React, { lazy } from 'react'

import DefaultLayout from '../layouts/Default'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const MenuCategory = lazy(() => import('../pages/Category'))
const MenuDish = lazy(() => import('../pages/Dish'))
const PageCart = lazy(() => import('../pages/Cart'))

const routes = () => [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/menu=:id', element: <MenuCategory /> },
      { path: '/menu=:id/dish=:id', element: <MenuDish /> },
      { path: '/cart', element: <PageCart /> },
    ],
  },
]

export default routes
