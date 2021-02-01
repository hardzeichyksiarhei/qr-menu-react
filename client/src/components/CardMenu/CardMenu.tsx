import React from 'react'
import { Card, Image } from 'antd'
import './CardMenu.css'
import { CardMenuProps } from '../../utils/propsComponents'
import { SERVER_URL } from '../../config'
const { Meta } = Card

function CardMenu({ menu }: CardMenuProps) {
  return (
    <Card
      className="menu-card"
      style={{ width: '100%', cursor: 'pointer' }}
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
    >
      <Meta title={menu.title} />
    </Card>
  )
}

export default CardMenu
