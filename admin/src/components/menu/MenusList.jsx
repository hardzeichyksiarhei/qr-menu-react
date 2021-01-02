import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Spin, Row, Col } from 'antd'
import { fetchMenus, clearMenus } from '../../store/actions/menus'
// import authSelectors from '../../store/selectors/auth'
import menusSelectors from '../../store/selectors/menus'

import MenuCard from './cards/MenuCard'

const MenuList = () => {
  const dispatch = useDispatch()

  // const user = useSelector(authSelectors.user)
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

  return (
    <div className="menus-list">
      <Row gutter={[20, 20]}>
        {menus.map((menu) => (
          <Col span={6} key={menu.id}>
            <MenuCard menu={menu} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MenuList
