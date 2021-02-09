import React, { lazy } from 'react'

import DefaultLayout from '../layouts/Default'
import EmptyLayout from '../layouts/Empty'

import Dashboard from '../pages/Dashboard'
const QrCodeScanner = lazy(() => import('../pages/QrCodeScanner'))
const MenuCategory = lazy(() => import('../pages/Category'))
const MenuDish = lazy(() => import('../pages/Dish'))

const NotFound = lazy(() => import('../pages/NotFound'))

const routes = () => [
  {
    path: '/',
    element: <EmptyLayout />,
    children: [{ path: '/', element: <QrCodeScanner /> }],
  },
  {
    path: '/:userId',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/menu/:menuId', element: <MenuCategory /> },
      { path: '/menu/:menuId/category/:categoryId/dish/:dishId', element: <MenuDish /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '*',
    element: <EmptyLayout />,
    children: [{ path: '/', element: <NotFound /> }],
  },
]

export default routes
