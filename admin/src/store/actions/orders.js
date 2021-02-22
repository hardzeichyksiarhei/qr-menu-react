import * as types from '../types/orders'

// Menus
export const fetchOrders = () => ({
  type: types.FETCH_ORDERS,
})

export const requestedOrders = () => ({
  type: types.REQUESTED_ORDERS,
})

export const requestedOrdersSuccess = (orders) => ({
  type: types.REQUESTED_ORDERS_SUCCEEDED,
  payload: { orders },
})

export const requestedOrdersError = () => ({
  type: types.REQUESTED_ORDERS_FAILED,
})

export const addOrder = (order) => ({
  type: types.ADD_ORDER,
  payload: { order },
})

export const removeOrder = (orderId) => ({
  type: types.REMOVE_ORDER,
  payload: { orderId },
})

export const clearOrders = () => ({
  type: types.CLEAR_ORDERS,
})
