import React from 'react'
import { categoriesProps } from '../../utils/propsComponents'
import CardCategory from '../CardCategory/CardCategory'

function MenuCategory({ categoryMenu }: categoriesProps) {
  return (
    <>
      {categoryMenu.map((category: { dish: {}[], title: string, photo: string }) => {
        return <CardCategory key={category.title} category={category} />
      })}
    </>
  )
}

export default MenuCategory
