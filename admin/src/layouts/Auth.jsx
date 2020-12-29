import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

const Auth = () => (
  <Layout className="auth-layout">
    <Outlet />
  </Layout>
)

export default Auth
