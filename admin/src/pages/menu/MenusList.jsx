import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMenus, clearMenus } from '../../store/actions/menus'
import menusSelectors from '../../store/selectors/menus'

import MenuList from '../../components/menu/MenusList'

const MenusList = () => {
  const dispatch = useDispatch()

  const isMenusLoading = useSelector(menusSelectors.isMenusLoading)
  const menus = useSelector(menusSelectors.allMenus)

  useEffect(() => {
    dispatch(fetchMenus())

    return () => {
      dispatch(clearMenus())
    }
  }, [dispatch])

  return (
    <div className="menus-list-page">
      <MenuList menus={menus} isMenusLoading={isMenusLoading} />
    </div>
  )
}

export default MenusList
