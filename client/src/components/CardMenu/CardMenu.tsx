import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Card, Image } from 'antd'

import { CardMenuProps } from '../../utils/propsComponents'

import { SERVER_URL } from '../../config'

const { Meta } = Card

function CardMenu({ menu }: CardMenuProps) {
  const { userId } = useParams()
  const navigate = useNavigate()

  const numberItems = menu.categories.reduce((acc, curr) => acc + curr.dishes.length, 0)

  return (
    <Card
      className="menu-card"
      style={{ width: '100%', cursor: 'pointer' }}
      onClick={() => navigate(`/${userId}/menu/${menu.id}`)}
      cover={
        <Image
          src={
            menu.photo
              ? `${SERVER_URL}/uploads/${menu.userId}/large/${menu.photo.sizes.large}`
              : 'https://via.placeholder.com/1366x768?text=QR Menu'
          }
          fallback="https://via.placeholder.com/1366x768?text=QR Menu"
          preview={false}
          alt={menu.title}
        />
      }
      hoverable
    >
      <Meta
        title={menu.title}
        description={`${menu.categories.length} categories, ${numberItems} items`}
      />
    </Card>
  )
}

export default CardMenu
