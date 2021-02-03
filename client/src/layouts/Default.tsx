import React, { Suspense, useState, useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Badge, Layout, Drawer, Grid } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import MenuBar from '../components/Navigation/Navigation'
import Basket from '../components/Basket/Basket'

import * as appActions from '../store/actions/app'
import appSelectors from '../store/selectors/app'
import orderSelectors from '../store/selectors/order'

const { Header, Content, Footer } = Layout
const { useBreakpoint } = Grid

function Default() {
  const dispatch = useDispatch()
  const { userId } = useParams()

  const quantity = useSelector(orderSelectors.quantity)
  const { restaurantName } = useSelector(appSelectors.settings)

  const [isCartVisible, setIsCartVisible] = useState(false)
  const screen = useBreakpoint()

  useEffect(() => {
    if (userId) dispatch(appActions.fetchSettings(userId))
  }, [dispatch, userId])

  const onCloseDrawer = (): void => {
    setIsCartVisible(false)
  }

  return (
    <Layout className="default-layout">
      <Header className="default-layout__header">
        <div className="header-logo">
          <Link to={`/${userId}`}>{restaurantName || 'QR Menu Clone'}</Link>
        </div>
        <div className="header-cart">
          <Badge count={quantity}>
            <ShoppingCartOutlined onClick={() => setIsCartVisible(true)} />
          </Badge>
        </div>
      </Header>
      <Content className="default-layout__content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © 2021 Developed by
        <a href="https://github.com/hardzeichyksiarhei" target="_blank" rel="noreferrer">
          &nbsp;hardz&nbsp;
        </a>
        /
        <a href="https://github.com/IKLOA" target="_blank" rel="noreferrer">
          &nbsp;IKLOA&nbsp;
        </a>
        /
        <a href="https://github.com/Mobidikt" target="_blank" rel="noreferrer">
          &nbsp;Mobidikt&nbsp;
        </a>
        /
        <a href="https://github.com/Grenzen" target="_blank" rel="noreferrer">
          &nbsp;Grenzen&nbsp;
        </a>
        &nbsp;for&nbsp;
        <a href="https://rs.school/" target="_blank" rel="noreferrer">
          RS School
        </a>
      </Footer>

      {screen.xs ? <MenuBar onShowCartDrawer={() => setIsCartVisible(true)} /> : null}

      <Drawer
        title="Cart"
        placement="right"
        width={480}
        closable={true}
        visible={isCartVisible}
        onClose={onCloseDrawer}
      >
        <Basket />
      </Drawer>
    </Layout>
  )
}
export default Default
