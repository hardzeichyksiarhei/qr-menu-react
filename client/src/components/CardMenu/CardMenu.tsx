import React from 'react'
import { Card } from 'antd'
import './CardMenu.css'
import { CardMenuProps } from '../../utils/propsComponents'
const { Meta } = Card

function CardMenu({ card, clickMenu }: CardMenuProps) {
  function clickCard() {
    clickMenu(card)
  }
  return (
    <Card
      className="menu-card"
      style={{ width: '100%', cursor: 'pointer' }}
      cover={
        <img
          className="card__image"
          style={{ width: '100%', height: '200px' }}
          alt={card.title}
          src={card.photo}
        />
      }
      onClick={clickCard}
    >
      <Meta title={card.title} />
    </Card>
  )
}

export default CardMenu
