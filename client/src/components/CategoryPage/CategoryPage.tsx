import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col } from 'antd'
import CardCategory from '../CardCategory/CardCategory'

import * as menusActions from '../../store/actions/menus'
import menusSelectors from '../../store/selectors/menus'

import { MenuProps, CategoryProps } from '../../utils/propsComponents'

const CategoryPage = () => {
  const dispatch = useDispatch()

  const { userId, menuId } = useParams()

  const menu: MenuProps = useSelector(menusSelectors.menuById(menuId))

  useEffect(() => {
    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  return (
    <>
      {menu && (
        <Row gutter={20}>
          {menu.categories.map((category: CategoryProps) => {
            return (
              <Col span={24} xxl={6} xl={8} md={12} sm={24} key={category.id}>
                <CardCategory
                  menuId={menuId}
                  category={category}
                  priceCurrency={menu.priceCurrency}
                />
              </Col>
            )
          })}
        </Row>
      )}
    </>
  )
}

export default CategoryPage
