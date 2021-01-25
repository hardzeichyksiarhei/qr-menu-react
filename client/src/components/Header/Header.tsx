import React from 'react'
import './Header.scss'
import { PageHeader, Button, Badge } from 'antd'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { HeaderProps } from '../../utils/propsComponents'
import { NavLink } from 'react-router-dom'

function Header({ countOrder }: HeaderProps) {
  return (
    <PageHeader
      title="QR Menu Clone"
      extra={[
        <NavLink key="1" to="/cart">
          <Button icon={<ShoppingCartOutlined />}>
            <Badge count={countOrder}></Badge>
          </Button>
        </NavLink>,

        <Button key="2" icon={<UserOutlined />}></Button>,
      ]}
    ></PageHeader>
  )
}

export default Header
