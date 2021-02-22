import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchDefaultMenu, clearMenu } from '../../store/actions/menu'

import MenuManagement from '../../components/menu/MenuManagement'

const MenuCreate = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDefaultMenu())

    return () => dispatch(clearMenu())
  }, [dispatch])

  return (
    <div className="menu-create-page">
      <MenuManagement />
    </div>
  )
}

export default MenuCreate
