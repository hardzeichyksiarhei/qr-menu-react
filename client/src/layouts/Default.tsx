import React, { Suspense, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Badge, Layout, Drawer, Grid } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import MenuBar from '../components/Navigation/Navigation'
import Basket from '../components/Basket/Basket'

import orderSelectors from '../store/selectors/order'

const { Header, Content, Footer } = Layout
const { useBreakpoint } = Grid

function Default() {
  const { userId } = useParams()
  const quantity = useSelector(orderSelectors.quantity)

  const [isCartVisible, setIsCartVisible] = useState(false)
  const screen = useBreakpoint()

  return (
    <Layout className="default-layout">
      <Header className="default-layout__header">
        <div className="header-logo">
          <Link to={`/${userId}`}>QR Menu Clone</Link>
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
      <Footer style={{ textAlign: 'center' }}>©2020 QR Menu Clone</Footer>

      {screen.xs ? <MenuBar /> : null}

      <Drawer
        title="Cart"
        placement="right"
        width={480}
        closable={false}
        visible={isCartVisible}
        onClose={() => setIsCartVisible(false)}
      >
        <Basket />
      </Drawer>
    </Layout>
  )
}
export default Default
