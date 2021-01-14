import React from 'react'
import { menu } from '../../MENU/MENU'
import CardCategory from '../CardCategory/CardCategory'
console.log(menu)
// type CategoryProps = { card: any, cardClick: (card: any) => void }
const categories = menu[0].categories
function MenuCategory() {
  return (
    <>
      {categories.map((category: any) => {
        return <CardCategory key={category.title} category={category} />
      })}
    </>
  )
}

export default MenuCategory
