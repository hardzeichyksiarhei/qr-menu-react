import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../../socket'
import { fetchOrders, clearOrders, addOrder } from '../../store/actions/orders'
import ordersSelectors from '../../store/selectors/orders'
import OrdersList from '../../components/orders/OrdersList'

const Orders = () => {
  const dispatch = useDispatch()
  const isOrdersLoading = useSelector(ordersSelectors.isOrdersLoading)
  const orders = useSelector(ordersSelectors.allOrders)

  useEffect(() => {
    socket.emit('ROOM:JOIN', localStorage.getItem('userId'))
  }, [])

  useEffect(() => {
    socket.on('ROOM:ADD_ORDER', (order) => {
      dispatch(addOrder(order))
    })
  }, [dispatch])

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
