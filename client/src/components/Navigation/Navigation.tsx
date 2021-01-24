import React from 'react'

import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { ArrowLeftOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './Navigation.scss'

function MenuBar() {
  return (
    <Menu className="menu-bar" mode="horizontal">
      <Menu.Item icon={<ArrowLeftOutlined />} key="back" />
      <Menu.Item icon={<HomeOutlined />} key="home">
        <NavLink to="/" />
      </Menu.Item>
      <Menu.Item icon={<ShoppingCartOutlined />} key="cart">
        <NavLink to="/cart" />
      </Menu.Item>
    </Menu>
  )
}

export default MenuBar
