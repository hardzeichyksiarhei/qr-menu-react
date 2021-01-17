import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import DefaultLayout from '../layouts/Default'
import AuthLayout from '../layouts/Auth'

import Dashboard from '../pages/Dashboard'

import Login from '../pages/auth/Login'
import Registration from '../pages/auth/Registration'
import RegistrationSuccessfully from '../pages/auth/RegistrationSuccessfully'

const Settings = lazy(() => import('../pages/Settings'))

const MenusList = lazy(() => import('../pages/menu/MenusList'))
const MenusTrashList = lazy(() => import('../pages/menu/MenusTrashList'))
const MenuCreate = lazy(() => import('../pages/menu/MenuCreate'))
const MenuEdit = lazy(() => import('../pages/menu/MenuEdit'))

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: isLoggedIn ? <DefaultLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/settings', element: <Settings /> },
      { path: '/menus', element: <MenusList /> },
      { path: '/menus/create', element: <MenuCreate /> },
      { path: '/menus/:menuId/edit', element: <MenuEdit /> },
      { path: '/menus/trash', element: <MenusTrashList /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
    ],
  },
  {
    // public routes
    path: '/',
    element: !isLoggedIn ? <AuthLayout /> : <Navigate to="/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'registration', element: <Registration /> },
      { path: 'registration/successfully', element: <RegistrationSuccessfully /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
]

export default routes
