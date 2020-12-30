import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Layout, Menu, Button } from 'antd'
import {
  PoweroffOutlined,
  AppstoreAddOutlined,
  DashboardOutlined,
  DeleteOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

import { useAuth } from '../auth/AuthProvider'

const { Header, Content, Sider } = Layout

const Default = () => {
  const auth = useAuth()

  return (
    <Layout className="default-layout">
      <Header className="app-header">
        <div className="app-header__logo" />
        <div className="app-header__controls">
          <>
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
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="menus" icon={<AppstoreAddOutlined />}>
              My menus
            </Menu.Item>
            <Menu.Item key="trashMenus" icon={<DeleteOutlined />}>
              Trash Menu
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
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
