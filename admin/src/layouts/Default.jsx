import React, { Suspense, useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Layout, Menu, Button, Space, Popover, message } from 'antd'
import {
  PoweroffOutlined,
  AppstoreAddOutlined,
  DashboardOutlined,
  DeleteOutlined,
  SettingOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  PlusOutlined,
  MenuOutlined,
} from '@ant-design/icons'

import { addOrder } from '../store/actions/orders'
import socket from '../socket'
import translate from '../intl/translate'
import { useAuth } from '../auth/AuthProvider'

import appSelectors from '../store/selectors/app'

import ProfileDropdown from '../components/ProfileDropdown'
import LanguageSelect from '../components/LanguageSelect'
import ButtonLink from '../components/ButtonLink'

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
  const location = useLocation()

  const dispatch = useDispatch()
  useEffect(() => {
    socket.emit('ROOM:JOIN', localStorage.getItem('userId'))
  }, [])

  useEffect(() => {
    socket.on('ROOM:ADD_ORDER', (order) => {
      message.info('Added a new order')
      dispatch(addOrder(order))
    })
  }, [dispatch])

  const [isCollapsed, setIsCollapsed] = useState(false)
  const { restaurantName } = useSelector(appSelectors.settings)

  return (
    <Layout className="default-layout" hasSider>
      <Sider
        className="left-navigation"
        breakpoint="lg"
        width={280}
        collapsed={isCollapsed}
        collapsedWidth={0}
        zeroWidthTriggerStyle={{ display: 'none' }}
        onBreakpoint={setIsCollapsed}
      >
        <h2 className="left-navigation__logo">QR Menu</h2>
        <ButtonLink
          linkTo="/menus/create"
          className="left-navigation__create-menu"
          icon={<PlusOutlined />}
        >
          {translate('CreateMenu')}
        </ButtonLink>
        <Menu theme="dark" selectedKeys={[location.pathname]}>
          {routes.map((route) => (
            <Menu.Item className="left-navigation__item" key={route.path} icon={route.icon}>
              <Link to={route.path}>{route.label}</Link>
            </Menu.Item>
          ))}
          <Menu.Item
            className="left-navigation__item"
            icon={<LogoutOutlined />}
            onClick={auth.logout}
            key="logout"
          >
            {translate('Logout')}
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="default-layout__container">
        <Header className="app-header">
          <Space className="d-flex align-items-center">
            {isCollapsed ? (
              <Popover
                overlayClassName="popover-navigation"
                placement="bottomLeft"
                content={[
                  <ButtonLink
                    linkTo="/menus/create"
                    className="popover-menu__create-menu"
                    icon={<PlusOutlined />}
                  >
                    Menu Create
                  </ButtonLink>,
                  <Menu width="320px" className="popover-menu" selectedKeys={[location.pathname]}>
                    {routes.map((route) => (
                      <Menu.Item className="popover-menu__item" key={route.path} icon={route.icon}>
                        <Link to={route.path}>{route.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu>,
                ]}
                trigger="focus"
              >
                <Button icon={<MenuOutlined />} />
              </Popover>
            ) : null}
            <h1 className="app-header__restaurant-name">{restaurantName}</h1>
          </Space>
          <div className="app-header__controls">
            <Space>
              <LanguageSelect />
              <ProfileDropdown />
              <Button
                className="app-header__logout"
                type="danger"
                icon={<PoweroffOutlined />}
                onClick={auth.logout}
              />
            </Space>
          </div>
        </Header>
        <Content className="default-layout__content">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Default
