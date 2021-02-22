/* eslint-disable react/prop-types */
import React, { Suspense, useState, useEffect, useCallback } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Layout, Menu, Button, Space, Popover, notification, Spin } from 'antd'
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
import authSelectors from '../store/selectors/auth'

import ProfileDropdown from '../components/ProfileDropdown'
import LanguageSelect from '../components/LanguageSelect'
import ButtonLink from '../components/ButtonLink'

import PageLoader from '../components/PageLoader'

const { Header, Content, Sider, Footer } = Layout

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
    label: translate('TrashMenus'),
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
  const dispatch = useDispatch()
  const auth = useAuth()
  const location = useLocation()

  const user = useSelector(authSelectors.user)
  const isUserLoading = useSelector(authSelectors.isUserLoading)

  useEffect(() => {
    if (user) {
      socket.emit('ROOM:JOIN', user.id)
      notification.destroy('session-expired')
    }
  }, [user])

  const addOrderHandler = useCallback(
    (order) => {
      notification.info({
        message: 'A new order has arrived',
      })
      dispatch(addOrder(order))
    },
    [dispatch],
  )

  useEffect(() => {
    socket.on('ROOM:ADD_ORDER', addOrderHandler)
    return () => {
      socket.off('ROOM:ADD_ORDER', addOrderHandler)
    }
  }, [addOrderHandler, dispatch])

  const [isCollapsed, setIsCollapsed] = useState(false)
  const { restaurantName } = useSelector(appSelectors.settings)

  return (
    <PageLoader isLoading={isUserLoading} content={<Spin size="large" />}>
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
          <a
            href="https://youtu.be/law1w1XCzyo"
            className="left-navigation__logo"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./qr-logo.png" alt="QR Code" />
            <span>QR Menu</span>
          </a>
          <ButtonLink
            linkTo="/menus/create"
            className="left-navigation__create-menu"
            icon={<PlusOutlined />}
          >
            <span>{translate('CreateMenu')}</span>
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
                      key="create-menu"
                    >
                      Menu Create
                    </ButtonLink>,
                    <Menu
                      width="320px"
                      className="popover-menu"
                      selectedKeys={[location.pathname]}
                      key="mobile-menu"
                    >
                      {routes.map((route) => (
                        <Menu.Item
                          className="popover-menu__item"
                          key={route.path}
                          icon={route.icon}
                        >
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
          <Footer className="app-footer" style={{ textAlign: 'center' }}>
            © 2021 Developed by
            <a href="https://github.com/hardzeichyksiarhei" target="_blank" rel="noreferrer">
              hardz
            </a>
            /
            <a href="https://github.com/IKLOA" target="_blank" rel="noreferrer">
              IKLOA
            </a>
            /
            <a href="https://github.com/Mobidikt" target="_blank" rel="noreferrer">
              Mobidikt
            </a>
            /
            <a href="https://github.com/Grenzen" target="_blank" rel="noreferrer">
              Grenzen
            </a>
            for
            <a href="https://rs.school/" target="_blank" rel="noreferrer">
              RS&nbsp;School
            </a>
          </Footer>
        </Layout>
      </Layout>
    </PageLoader>
  )
}

export default Default
