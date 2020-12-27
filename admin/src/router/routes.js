import React from 'react'
import { Navigate } from 'react-router-dom'

import DefaultLayout from '../layouts/Default'
import EmptyLayout from '../layouts/Empty'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/auth/Login'
import Registration from '../pages/auth/Registration'

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: isLoggedIn ? <DefaultLayout /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
    ],
  },
  {
    // public routes
    path: '/',
    element: !isLoggedIn ? <EmptyLayout /> : <Navigate to="/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'registration', element: <Registration /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
]

export default routes
