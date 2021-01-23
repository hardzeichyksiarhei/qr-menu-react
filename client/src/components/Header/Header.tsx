import React from 'react'
import './Header.scss'
import { PageHeader, Button, Badge } from 'antd'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { HeaderProps } from '../../utils/propsComponents'

function Header({ countOrder }: HeaderProps) {
  return (
    <PageHeader
      title="QR Menu Clone"
      extra={[
        <Button key="2" icon={<ShoppingCartOutlined />}>
          <Badge count={countOrder}></Badge>
        </Button>,

        <Button key="1" icon={<UserOutlined />}></Button>,
      ]}
    ></PageHeader>
  )
}

export default Header
