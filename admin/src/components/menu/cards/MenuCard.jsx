import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Card } from 'antd'

import { EditOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons'

const { Meta } = Card

const MenuCard = ({ menu }) => {
  const numberItems = menu.categories.reduce((acc, curr) => acc + curr.dishes.length, 0)

  return (
    <Card
      cover={
        <img
          alt={menu.title}
          src={menu.photo || 'https://via.placeholder.com/600x360?text=QR Menu'}
        />
      }
      actions={[
        <Link to={`/menus/${menu.id}/edit`}>
          <EditOutlined key="edit" />
        </Link>,
        <EyeOutlined key="preview" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title={menu.title}
        description={`${menu.categories.length} categories, ${numberItems} items`}
      />
    </Card>
  )
}

MenuCard.propTypes = {
  menu: PropTypes.instanceOf(Object).isRequired,
}

export default MenuCard
