import React from 'react'
import { MenuCategoryProps } from '../../utils/propsComponents'
import CardCategory from '../CardCategory/CardCategory'

function MenuCategory({ categoryMenu, choiceDish }: MenuCategoryProps) {
  return (
    <>
      {categoryMenu.map((category: { dish: {}[], title: string, photo: string }) => {
        return <CardCategory key={category.title} category={category} choiceDish={choiceDish} />
      })}
    </>
  )
}

export default MenuCategory
