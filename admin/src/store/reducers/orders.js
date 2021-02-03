import * as types from '../types/orders'

const initialState = {
  orders: [],
  isOrdersLoading: true,
  isOrdersError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTED_ORDERS: {
      return {
        ...state,
        isOrdersLoading: true,
      }
    }
    case types.REQUESTED_ORDERS_SUCCEEDED: {
      return {
        ...state,
        orders: action.payload.orders,
        isOrdersLoading: false,
      }
    }
    case types.REQUESTED_ORDERS_FAILED: {
      return {
        ...state,
        isOrdersErrors: true,
        isOrdersLoading: false,
      }
    }

    case types.ADD_ORDER: {
      const { order } = action.payload
      return {
        ...state,
        orders: [order, ...state.orders],
      }
    }

    case types.CLEAR_ORDERS: {
      return {
        ...state,
        orders: [],
      }
    }

    case types.REMOVE_ORDER: {
      const { orderId } = action.payload
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== orderId),
      }
    }
    default:
      return state
  }
}

export default reducer
