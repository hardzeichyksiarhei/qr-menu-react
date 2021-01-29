import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Spin, Row, Col, Drawer, Empty } from 'antd'

import MenuCard from './cards/MenuCard'
import MenuPreview from './MenuPreview'

import { CLIENT_URL } from '../../config'

const MenuList = ({ menus, isMenusLoading }) => {
  const [isMenuPreviewVisible, setIsMenuPreviewVisible] = useState(false)

  if (!menus.length && isMenusLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spin size="large" />
      </div>
    )
  }

  if (!menus.length && !isMenusLoading) {
    return <Empty />
  }

  const handleShowPreviewDrawer = () => {
    setIsMenuPreviewVisible(true)
  }

  return (
    <div className="menus-list">
      <Row gutter={[20, 20]}>
        {menus.map((menu) => (
          <Col span={6} key={menu.id}>
            <MenuCard menu={menu} onShowPreviewDrawer={handleShowPreviewDrawer} />
          </Col>
        ))}
      </Row>

      <Drawer
        title="Preview"
        visible={isMenuPreviewVisible}
        onClose={() => setIsMenuPreviewVisible(false)}
        width={600}
        destroyOnClose
      >
        <MenuPreview url={CLIENT_URL} />
      </Drawer>
    </div>
  )
}

MenuList.propTypes = {
  menus: PropTypes.instanceOf(Object).isRequired,
  isMenusLoading: PropTypes.bool.isRequired,
}

export default MenuList
