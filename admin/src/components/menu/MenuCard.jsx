import React from 'react'
import PropTypes from 'prop-types'

import { Card } from 'antd'

import { EditOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons'

const { Meta } = Card

const MenuCard = ({ menu }) => (
  <Card
    cover={<img alt={menu.title} src={menu.photo} />}
    actions={[
      <EditOutlined key="edit" />,
      <EyeOutlined key="preview" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta title={menu.title} description="10 categories &bull; 20 items" />
  </Card>
)

MenuCard.propTypes = {
  menu: PropTypes.shape.isRequired,
}

export default MenuCard
