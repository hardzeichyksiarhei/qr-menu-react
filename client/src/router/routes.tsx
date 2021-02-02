import React, { lazy } from 'react'

import DefaultLayout from '../layouts/Default'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const MenuCategory = lazy(() => import('../pages/Category'))
const MenuDish = lazy(() => import('../pages/Dish'))
const PageCart = lazy(() => import('../pages/Cart'))

const routes = () => [
  {
    path: '/:userId',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/menu/:menuId', element: <MenuCategory /> },
      { path: '/menu/:menuId/category/:categoryId/dish/:dishId', element: <MenuDish /> },
      { path: '/cart', element: <PageCart /> },
    ],
  },
]

export default routes
