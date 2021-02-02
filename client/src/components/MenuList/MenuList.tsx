import React from 'react'
import { useSelector } from 'react-redux'

import { Row, Col } from 'antd'
import CardMenu from '../CardMenu/CardMenu'

import menusSelectors from '../../store/selectors/menus'

import { MenuProps } from '../../utils/propsComponents'

const MenuList = () => {
  const menus: MenuProps[] = useSelector(menusSelectors.menus)

  if (!menus.length) {
    return null
  }

  return (
    <div className="menus-list">
      <Row gutter={20}>
        {menus.map((menu) => (
          <Col span={24} xxl={6} xl={8} md={12} sm={24} key={menu.id}>
            <CardMenu menu={menu} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MenuList
