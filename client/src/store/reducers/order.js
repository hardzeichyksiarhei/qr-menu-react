import * as types from '../types/order'

const initialState = {
  items: JSON.parse(localStorage.getItem('order')).items || [],
  totalPrice: JSON.parse(localStorage.getItem('order')).totalPrice | 0,
  currency: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      const { item: addItem } = action.payload

      const itemIdx = state.items.findIndex(({ item }) => item.id === addItem.id)

      state.items =
        itemIdx !== -1
          ? state.items.map(({ item, quantity }, idx) =>
              itemIdx === idx ? { quantity: quantity + 1, item } : { quantity, item },
            )
          : [...state.items, { quantity: 1, item: addItem }]

      state.totalPrice = state.totalPrice + addItem.priceValue

      localStorage.setItem('order', JSON.stringify(state))
      return {
        ...state,
      }
    }

    case types.DELETE_ITEM: {
      const { item: deleteItem } = action.payload

      const itemIdx = state.items.findIndex(({ item }) => item.id === deleteItem.id)

      if (state.items[itemIdx].quantity === 1) {
        const newItems = state.items.filter((el) => el.item.id !== deleteItem.id)
        state.totalPrice = state.totalPrice - deleteItem.priceValue
        state.items = newItems
        localStorage.setItem('order', JSON.stringify(state))
        return {
          ...state,
        }
      }

      state.items = state.items.map(({ item, quantity }, idx) =>
        itemIdx === idx ? { quantity: quantity - 1, item } : { quantity, item },
      )
      state.totalPrice = state.totalPrice - deleteItem.priceValue

      localStorage.setItem('order', JSON.stringify(state))

      return {
        ...state,
      }
    }

    case types.CLEAR_CART: {
      localStorage.setItem('order', JSON.stringify({}))
      return {
        items: [],
        totalPrice: 0,
      }
    }

    default:
      return state
  }
}

export default reducer
