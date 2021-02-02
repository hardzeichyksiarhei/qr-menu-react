import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from '../Header/Header'
import MenuList from '../MenuList/MenuList'

import * as menusActions from '../../store/actions/menus'

import { renderCountOrderDish } from '../../utils/renderCountOrderDish'

function DashboardPage() {
  const { userId } = useParams()
  const dispatch = useDispatch()

  const orderUser = JSON.parse(localStorage.getItem('orderUser') || '[]')
  const [countOrderDish, setCountOrderDish] = useState(0)

  useEffect(() => {
    dispatch(menusActions.fetchMenus(userId))
  }, [dispatch, userId])

  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
  }, [orderUser])

  return (
    <>
      {/* <Header countOrder={countOrderDish} /> */}
      <MenuList />
    </>
  )
}
export default DashboardPage
