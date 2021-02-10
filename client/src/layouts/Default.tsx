import React, { Suspense, useState, useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Badge, Layout, Drawer, Grid, Avatar, Image } from 'antd'
import { ShoppingCartOutlined, QrcodeOutlined } from '@ant-design/icons'

import MenuBar from '../components/Navigation/Navigation'
import Basket from '../components/Basket/Basket'

import * as appActions from '../store/actions/app'
import appSelectors from '../store/selectors/app'
import orderSelectors from '../store/selectors/order'

import { SERVER_URL } from '../config'

const { Header, Content, Footer } = Layout
const { useBreakpoint } = Grid

function Default() {
  const dispatch = useDispatch()
  const { userId } = useParams()

  const quantity = useSelector(orderSelectors.quantity)
  const { restaurantName, logo } = useSelector(appSelectors.settings)

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
        <Link to={`/${userId}`} className="header-logo">
          <div className="header-logo__image">
            {logo ? (
              <Image
                src={
                  logo
                    ? `${SERVER_URL}/uploads/${logo.userId}/thumbnail/${logo.sizes.thumbnail}`
                    : 'https://via.placeholder.com/80x80?text=QR Menu'
                }
                preview={false}
              />
            ) : (
              <Avatar shape="square" size={40} icon={<QrcodeOutlined />} />
            )}
          </div>

          <span>{restaurantName || 'QR Menu Clone'}</span>
        </Link>
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

      {screen.xs ? <MenuBar onShowCartDrawer={() => setIsCartVisible(true)} /> : null}

      <Drawer
        title={<h2 style={{ margin: 0 }}>CART</h2>}
        placement="right"
        width={screen.xs ? '100%' : 480}
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
