import React from 'react'
import { Card, List } from 'antd'
import './CardMenu.css'
const { Meta } = Card
type CardMenuProps = { card: any, cardClick: (card: any) => void }
function CardMenu({ card, cardClick }: CardMenuProps) {
  function clickMenu(card: any) {
    console.log(card)
    // console.log(cardClick)
    cardClick(card)
  }
  const clickItemMenu = (item: any) => {
    console.log(item)
  }
  return (
    <Card
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
      {/* <List
        style={{ display: 'block' }}
        bordered
        dataSource={card.categories}
        renderItem={(item) => <List.Item onClick={clickItemMenu}>{item}</List.Item>}
      /> */}
      <Meta title={card.title} />
    </Card>
  )
}

export default CardMenu
