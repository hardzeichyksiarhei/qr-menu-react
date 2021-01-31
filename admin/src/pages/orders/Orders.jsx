import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders, clearOrders } from '../../store/actions/orders'
import ordersSelectors from '../../store/selectors/orders'
import OrdersList from '../../components/orders/OrdersList'

const Orders = () => {
  const dispatch = useDispatch()
  const isOrdersLoading = useSelector(ordersSelectors.isOrdersLoading)
  const orders = useSelector(ordersSelectors.allOrders)

  useEffect(() => {
    dispatch(fetchOrders())

    return () => {
      dispatch(clearOrders())
    }
  }, [dispatch])
  return (
    <>
      <OrdersList orders={orders} isOrdersLoading={isOrdersLoading} />
    </>
  )
}

export default Orders
