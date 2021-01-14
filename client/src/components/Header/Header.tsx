import React from 'react'
import './Header.scss'
import { PageHeader, Button, Badge } from 'antd'
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <PageHeader
      title="QR Menu Clone"
      extra={[
        <Button key="3" icon={<ShoppingCartOutlined />}>
          <Badge count={3}></Badge>
        </Button>,

        <Button key="1" icon={<UserOutlined />}></Button>,
      ]}
    ></PageHeader>
  )
}

export default Header
