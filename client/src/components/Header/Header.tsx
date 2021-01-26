import React from 'react'
import './Header.scss'
import { PageHeader, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { HeaderProps } from '../../utils/propsComponents'
import { NavLink } from 'react-router-dom'

function Header({ countOrder }: HeaderProps) {
  return (
    <PageHeader
      className="header"
      title="QR Menu Clone"
      extra={[
        <NavLink key="1" to="/cart">
          <Button className="btn__header" icon={<ShoppingCartOutlined />}>
            {countOrder > 0 ? <p className="btn__text">{countOrder}</p> : <></>}
          </Button>
        </NavLink>,
      ]}
    ></PageHeader>
  )
}

export default Header
