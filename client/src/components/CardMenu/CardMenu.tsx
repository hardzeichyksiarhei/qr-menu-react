import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Card, Image } from 'antd'

import { CardMenuProps } from '../../utils/propsComponents'

import { SERVER_URL } from '../../config'

import './CardMenu.scss'

const { Meta } = Card

function CardMenu({ menu }: CardMenuProps) {
  const { userId } = useParams()
  const navigate = useNavigate()

  const numberItems = menu.categories.reduce((acc, curr) => acc + curr.dishes.length, 0)

  return (
    <Card
      className={`menu-card ${menu.isEnabledToOrder ? 'enabled' : 'disabled'}`}
      bodyStyle={{ padding: '10px' }}
      onClick={() => menu.isEnabledToOrder && navigate(`/${userId}/menu/${menu.id}`)}
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
      hoverable={!!menu.isEnabledToOrder}
    >
      <Meta
        title={
          <div className="menu-card__content">
            <span className="menu-card__status">
              {menu.isEnabledToOrder ? 'Enabled To Order' : 'Disabled To Order'}
            </span>
            <span className="menu-card__title">{menu.title}</span>
          </div>
        }
        description={`${menu.categories.length} categories, ${numberItems} items`}
      />
    </Card>
  )
}

export default CardMenu
