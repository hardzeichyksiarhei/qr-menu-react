import React from 'react'
import CardMenu from '../CardMenu/CardMenu'

type MenuListProps = {
  menus: {
    id: number,
    title: string,
    photo: string,
    categories: { dish: { title: string }[], title: string, photo: string }[],
  }[],
  choiceMenu: (menu: {
    id: number,
    title: string,
    photo: string,
    categories: { dish: { title: string }[], title: string, photo: string }[],
  }) => void,
}
function MenuList({ menus, choiceMenu }: MenuListProps) {
  function menuClick(menu: {
    id: number,
    title: string,
    photo: string,
    categories: { dish: { title: string }[], title: string, photo: string }[],
  }) {
    choiceMenu(menu)
  }

  return (
    <>
      {menus.map((card) => {
        return <CardMenu key={card.id} card={card} clickMenu={menuClick} />
      })}
    </>
  )
}

export default MenuList
