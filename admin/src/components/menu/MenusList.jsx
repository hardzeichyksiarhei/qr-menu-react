import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Spin, Row, Col, Drawer, Empty } from 'antd'

import MenuCard from './cards/MenuCard'
import MenuPreview from './MenuPreview'

import authSelectors from '../../store/selectors/auth'

import { CLIENT_URL } from '../../config'

const MenuList = ({ menus, isMenusLoading }) => {
  const [isMenuPreviewVisible, setIsMenuPreviewVisible] = useState(false)
  const user = useSelector(authSelectors.user)

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
          <Col span={24} xxl={6} xl={8} md={12} sm={24} key={menu.id}>
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
        <MenuPreview url={`${CLIENT_URL}/${user.id}`} />
      </Drawer>
    </div>
  )
}

MenuList.propTypes = {
  menus: PropTypes.instanceOf(Object).isRequired,
  isMenusLoading: PropTypes.bool.isRequired,
}

export default MenuList
