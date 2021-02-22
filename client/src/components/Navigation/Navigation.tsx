import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { Button } from 'antd'
import {
  ArrowLeftOutlined,
  ShopOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'

import './Navigation.scss'

const MenuBar = (props: any) => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="bottom-navigation">
      {location.pathname !== `/${userId}` ? (
        <Button
          icon={<ArrowLeftOutlined style={{ fontSize: '26px' }} />}
          onClick={() => window.history.back()}
          type="text"
          key="back"
        />
      ) : null}

      {location.pathname !== `/${userId}` ? (
        <Button
          icon={<AppstoreOutlined style={{ fontSize: '26px' }} />}
          onClick={() => navigate(`/${userId}`)}
          type="text"
          key="menus"
        />
      ) : null}

      <Button
        icon={<ShopOutlined style={{ fontSize: '26px' }} />}
        onClick={() => navigate(`/${userId}/about`)}
        type="text"
        key="about"
      />

      <Button
        icon={<ShoppingCartOutlined style={{ fontSize: '26px' }} />}
        onClick={() => props.onShowCartDrawer()}
        type="text"
      />
    </div>
  )
}

export default MenuBar
