import React from 'react'

import { Row, Col } from 'antd'

import { CategoryProps, MenuCategoryProps } from '../../utils/propsComponents'
import CardCategory from '../CardCategory/CardCategory'

function MenuCategory({ categoryMenu, priceCurrency, menuId }: MenuCategoryProps) {
  return (
    <Row gutter={20}>
      {categoryMenu.map((category: CategoryProps) => {
        return (
          <Col span={24} xxl={6} xl={8} md={12} sm={24} key={category.id}>
            <CardCategory menuId={menuId} category={category} priceCurrency={priceCurrency} />
          </Col>
        )
      })}
    </Row>
  )
}

export default MenuCategory
