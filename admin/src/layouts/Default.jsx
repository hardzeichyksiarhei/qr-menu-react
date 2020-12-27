import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout, Menu, Button } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'

import { useAuth } from '../auth/AuthProvider'

const { SubMenu } = Menu
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
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content className="default-layout__content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Default
