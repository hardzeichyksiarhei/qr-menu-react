import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchMenu } from '../../store/actions/menu'

import MenuManagement from '../../components/menu/MenuManagement'

const MenuEdit = () => {
  const dispatch = useDispatch()
  const { menuId } = useParams()

  useEffect(() => {
    dispatch(fetchMenu(Number(menuId)))
  }, [dispatch, menuId])

  return (
    <div className="menu-edit-page">
      <MenuManagement />
    </div>
  )
}

export default MenuEdit
