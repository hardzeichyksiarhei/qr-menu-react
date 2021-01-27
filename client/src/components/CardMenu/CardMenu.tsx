import React from 'react'
import { Card } from 'antd'
import './CardMenu.css'
import { CardMenuProps } from '../../utils/propsComponents'
const { Meta } = Card

function CardMenu({ menu }: CardMenuProps) {
  return (
    <Card
      className="menu-card"
      style={{ width: '100%', cursor: 'pointer' }}
      cover={
        <img
          className="card__image"
          style={{ width: '100%', height: '200px' }}
          alt={menu.title}
          src={menu.photo}
        />
      }
    >
      <Meta title={menu.title} />
    </Card>
  )
}

export default CardMenu
