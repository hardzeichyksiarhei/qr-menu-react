import * as types from '../types/order'
import * as storage from '../../helpers/storage'

const { items, totalPrice } = storage.get('order', {})

const initialState = {
  items: items || [],
  totalPrice: totalPrice || 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      const { item: addItem } = action.payload

      const itemIdx = state.items.findIndex(({ item }) => item.id === addItem.id)

      const items =
        itemIdx !== -1
          ? state.items.map(({ item, quantity }, idx) =>
              itemIdx === idx ? { quantity: quantity + 1, item } : { quantity, item },
            )
          : [...state.items, { quantity: 1, item: addItem }]

      const totalPrice = state.totalPrice + addItem.priceValue

      storage.set('order', { items, totalPrice })
      return {
        ...state,
        items,
        totalPrice,
      }
    }

    case types.DELETE_ITEM: {
      const { item: deleteItem } = action.payload

      const itemIdx = state.items.findIndex(({ item }) => item.id === deleteItem.id)

      if (state.items[itemIdx].quantity === 1) {
        const items = state.items.filter((el) => el.item.id !== deleteItem.id)
        const totalPrice = state.totalPrice - deleteItem.priceValue

        storage.set('order', { items, totalPrice })
        return {
          ...state,
          items,
          totalPrice,
        }
      }

      const items = state.items.map(({ item, quantity }, idx) =>
        itemIdx === idx ? { quantity: quantity - 1, item } : { quantity, item },
      )
      const totalPrice = state.totalPrice - deleteItem.priceValue

      storage.set('order', { items, totalPrice })
      return {
        ...state,
        items,
        totalPrice,
      }
    }

    case types.CLEAR_CART: {
      storage.set('order', {})
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
