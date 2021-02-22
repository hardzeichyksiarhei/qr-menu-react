import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Spin, Row, Col, Drawer, Empty } from 'antd'

import MenuCard from './cards/MenuCard'
import MenuPreview from './MenuPreview'

import authSelectors from '../../store/selectors/auth'

import { CLIENT_URL } from '../../config'

const MenuList = ({ menus, isMenusLoading }) => {
  const [previewMenuId, setPreviewMenuId] = useState(null)
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

  const handleShowPreviewDrawer = (menuId) => {
    setPreviewMenuId(menuId)
  }

  const handleHidePreviewDrawer = () => {
    setPreviewMenuId(null)
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

      {user ? (
        <Drawer
          title="Preview"
          visible={!!previewMenuId}
          onClose={() => handleHidePreviewDrawer()}
          width={600}
        >
          <MenuPreview url={`${CLIENT_URL}/${user.id}/menu/${previewMenuId}`} />
        </Drawer>
      ) : null}
    </div>
  )
}

MenuList.propTypes = {
  menus: PropTypes.instanceOf(Object).isRequired,
  isMenusLoading: PropTypes.bool.isRequired,
}

export default MenuList
