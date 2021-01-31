import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import MenuList from '../MenuList/MenuList'
import { renderCountOrderDish } from '../../utils/renderCountOrderDish'

function DashboardPage() {
  const orderUser = JSON.parse(localStorage.getItem('orderUser') || '[]')
  const [countOrderDish, setCountOrderDish] = useState(0)
  useEffect(() => {
    setCountOrderDish(renderCountOrderDish(orderUser))
  }, [orderUser])
  return (
    <>
      <Header countOrder={countOrderDish} />
      <MenuList />
    </>
  )
}
export default DashboardPage
