import React from 'react'
import { Card } from 'antd'
import './CardMenu.css'
const { Meta } = Card
type CardMenuProps = {
  card: {
    id: number,
    title: string,
    photo: string,
    categories: any[],
  },
  clickMenu: (card: any) => void,
}
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
