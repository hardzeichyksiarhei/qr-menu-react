import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import MenuList from '../MenuList/MenuList'

import * as menusActions from '../../store/actions/menus'

const DashboardPage = () => {
  const { userId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  return <MenuList />
}
export default DashboardPage
