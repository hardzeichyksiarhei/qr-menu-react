import React from 'react'

import { Menu } from 'antd'
import { ArrowLeftOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const MenuBar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item icon={<ArrowLeftOutlined />} key="back" />
      <Menu.Item icon={<HomeOutlined />} key="home" />
      <Menu.Item icon={<ShoppingCartOutlined />} key="cart" />
    </Menu>
  )
}

export default MenuBar
