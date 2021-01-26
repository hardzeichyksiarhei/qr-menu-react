import React from 'react'

import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { ArrowLeftOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './Navigation.scss'

function MenuBar() {
  const goBack = () => {
    window.history.back()
  }
  return (
    <Menu className="menu-bar" mode="horizontal">
      <Menu.Item icon={<ArrowLeftOutlined />} onClick={goBack} key="back" />
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
