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
  ShoppingCartOutlined,
} from '@ant-design/icons'

import ProfileDropdown from '../components/ProfileDropdown'
import LanguageSelect from '../components/LanguageSelect'
import translate from '../intl/translate'

import { useAuth } from '../auth/AuthProvider'

const { Header, Content, Sider } = Layout

const routes = [
  {
    path: '/dashboard',
    label: translate('Dashboard'),
    icon: <DashboardOutlined />,
  },
  {
    path: '/menus',
    label: translate('MyMenus'),
    icon: <AppstoreAddOutlined />,
  },
  {
    path: '/menus/trash',
    label: translate('TrashMenu'),
    icon: <DeleteOutlined />,
  },
  {
    path: '/settings',
    label: translate('Settings'),
    icon: <SettingOutlined />,
  },
  {
    path: '/orders',
    label: translate('Orders'),
    icon: <ShoppingCartOutlined />,
  },
]

const Default = () => {
  const auth = useAuth()

  return (
    <Layout className="default-layout">
      <Header className="app-header">
        <h2 className="app-header__logo">QR Menu Clone</h2>
        <div className="app-header__controls">
          <>
            <LanguageSelect />
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
              {translate('Logout')}
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
