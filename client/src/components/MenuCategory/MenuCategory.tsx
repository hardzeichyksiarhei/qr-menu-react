import React from 'react'
import { CategoryProps, MenuCategoryProps } from '../../utils/propsComponents'
import CardCategory from '../CardCategory/CardCategory'

function MenuCategory({ categoryMenu, priceCurrency, menuId }: MenuCategoryProps) {
  return (
    <>
      {categoryMenu.map((category: CategoryProps) => {
        return (
          <CardCategory
            key={category.title}
            menuId={menuId}
            category={category}
            priceCurrency={priceCurrency}
          />
        )
      })}
    </>
  )
}

export default MenuCategory
