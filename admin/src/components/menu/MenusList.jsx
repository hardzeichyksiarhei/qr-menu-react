import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Spin, Row, Col, Drawer } from 'antd'
import { fetchMenus, clearMenus } from '../../store/actions/menus'
import menusSelectors from '../../store/selectors/menus'

import MenuCard from './cards/MenuCard'
import MenuPreview from './MenuPreview'

const MenuList = () => {
  const dispatch = useDispatch()

  const [isMenuPreviewVisible, setIsMenuPreviewVisible] = useState(false)

  const { menus, isMenusLoading } = useSelector(menusSelectors.menus)

  useEffect(() => {
    dispatch(fetchMenus())

    return () => {
      dispatch(clearMenus())
    }
  }, [dispatch])

  if (!menus.length && isMenusLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spin size="large" />
      </div>
    )
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
        <MenuPreview url="https://ant.design/" />
      </Drawer>
    </div>
  )
}

export default MenuList
