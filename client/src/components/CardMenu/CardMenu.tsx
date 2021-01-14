import React from 'react'
import { Card } from 'antd'
import './CardMenu.css'
const { Meta } = Card
type CardMenuProps = { card: any, cardClick: (card: any) => void }
function CardMenu({ card, cardClick }: CardMenuProps) {
  function clickMenu() {
    cardClick(card)
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
      onClick={clickMenu}
    >
      <Meta title={card.title} />
    </Card>
  )
}

export default CardMenu
