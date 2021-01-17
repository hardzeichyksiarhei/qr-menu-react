import React from 'react'
import { CategoryProps, MenuCategoryProps } from '../../utils/propsComponents'
import CardCategory from '../CardCategory/CardCategory'

function MenuCategory({ categoryMenu, choiceDish }: MenuCategoryProps) {
  return (
    <>
      {categoryMenu.map((category: CategoryProps) => {
        return <CardCategory key={category.title} category={category} choiceDish={choiceDish} />
      })}
    </>
  )
}

export default MenuCategory
