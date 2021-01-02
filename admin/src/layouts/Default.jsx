import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { Layout, Menu, Button } from 'antd'
import {
  PoweroffOutlined,
  AppstoreAddOutlined,
  DashboardOutlined,
  DeleteOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

import ProfileDropdown from '../components/ProfileDropdown'

import { useAuth } from '../auth/AuthProvider'

const { Header, Content, Sider } = Layout

const routes = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    path: '/menus',
    label: 'My menus',
    icon: <AppstoreAddOutlined />,
  },
  {
    path: '/menus/trash',
    label: 'Trash Menu',
    icon: <DeleteOutlined />,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
]

const Default = () => {
  const auth = useAuth()

  return (
    <Layout className="default-layout">
      <Header className="app-header">
        <div className="app-header__logo" />
        <div className="app-header__controls">
          <>
            <ProfileDropdown />
            <Button
              className="app-header__logout"
              style={{ marginLeft: 10 }}
              type="danger"
              size="large"
              icon={<PoweroffOutlined />}
              onClick={auth.logout}
            />
          </>
        </div>
      </Header>
      <Layout className="default-layout__container">
        <Sider width={280} className="site-layout-background">
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            {routes.map((route) => (
              <Menu.Item key={route.path} icon={route.icon}>
                <Link to={route.path}>{route.label}</Link>
              </Menu.Item>
            ))}
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={auth.logout}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content className="default-layout__content">
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Default
