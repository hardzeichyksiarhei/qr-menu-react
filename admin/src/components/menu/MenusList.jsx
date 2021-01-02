import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col } from 'antd'
import { fetchMenus } from '../../store/actions/menus'
// import authSelectors from '../../store/selectors/auth'
import menusSelectors from '../../store/selectors/menus'

import MenuCard from './cards/MenuCard'

const MenuList = () => {
  const dispatch = useDispatch()

  // const user = useSelector(authSelectors.user)
  const menus = useSelector(menusSelectors.menus)

  useEffect(() => {
    dispatch(fetchMenus())
  }, [dispatch])

  return (
    <div className="menus-list">
      <Row gutter={[20, 20]}>
        {menus.map((menu) => (
          <Col span={6}>
            <MenuCard menu={menu} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MenuList
