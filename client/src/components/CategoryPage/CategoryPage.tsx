import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import MenuCategory from '../MenuCategory/MenuCategory'

import * as menusActions from '../../store/actions/menus'
import menusSelectors from '../../store/selectors/menus'

import { MenuProps } from '../../utils/propsComponents'

const CategoryPage = () => {
  const dispatch = useDispatch()

  const { userId, menuId } = useParams()

  const menu: MenuProps = useSelector(menusSelectors.menuById(menuId))

  useEffect(() => {
    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  return (
    <>
      {menu && (
        <MenuCategory
          priceCurrency={menu.priceCurrency}
          categoryMenu={menu.categories}
          menuId={menu.id}
        />
      )}
    </>
  )
}

export default CategoryPage
