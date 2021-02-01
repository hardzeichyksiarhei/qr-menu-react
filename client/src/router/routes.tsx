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
      { path: '/:userId', element: <Dashboard /> },
      { path: '/:userId/menu/:menuId', element: <MenuCategory /> },
      { path: '/:userId/menu/:menuId/category/:categoryId/dish/:dishId', element: <MenuDish /> },
      { path: '/:userId/cart', element: <PageCart /> },
    ],
  },
]

export default routes
