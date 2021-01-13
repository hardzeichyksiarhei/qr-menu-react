import React from 'react'
import CardMenu from '../CardMenu/CardMenu'
import { menu } from '../../MENU/MENU'

function Menu() {
  function cardClick(item: any) {
    console.log(item)
  }

  return (
    <>
      {menu.map((card) => {
        return <CardMenu key={card.id} card={card} cardClick={cardClick} />
      })}
    </>
  )
}

export default Menu
