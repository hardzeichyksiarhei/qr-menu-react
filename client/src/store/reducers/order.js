import * as types from '../types/order'

/*

{
    items: [{
        quantity: 10,
        item: {
          title: 'Dish'
          price: 100,
        }
    }],
    totalPrice: 0
}

*/

const initialState = {
  items: [],
  totalPrice: 0,
  currency: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      const { item: addItem } = action.payload

      const itemIdx = state.items.findIndex(({ item }) => item.id === addItem.id)

      return {
        ...state,
        items:
          itemIdx !== -1
            ? state.items.map(({ item, quantity }, idx) =>
                itemIdx === idx ? { quantity: quantity + 1, item } : { quantity, item },
              )
            : [...state.items, { quantity: 1, item: addItem }],
        totalPrice: state.totalPrice + addItem.priceValue,
      }
    }

    case types.DELETE_ITEM: {
      const { item: deleteItem } = action.payload

      const itemIdx = state.items.findIndex(({ item }) => item.id === deleteItem.id)

      if (state.items[itemIdx].quantity === 1) {
        const newItems = state.items.filter((el) => el.item.id !== deleteItem.id)
        return {
          ...state,
          items: newItems,
          totalPrice: state.totalPrice - deleteItem.priceValue,
        }
      }

      return {
        ...state,
        items: state.items.map(({ item, quantity }, idx) =>
          itemIdx === idx ? { quantity: quantity - 1, item } : { quantity, item },
        ),
        totalPrice: state.totalPrice - deleteItem.priceValue,
      }
    }

    case types.CLEAR_CART: {
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
