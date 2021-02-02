import * as types from '../types/order'

/*

{
    items: [{
        quantity: 10,
        item: {}
    }],
    totalPrice: 0
}

*/

const initialState = {
  items: [],
  totalPrice: 0,
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
                itemIdx === idx ? { quantity: quantity + 1, item } : item,
              )
            : [...state.items, { quantity: 1, item: addItem }],
        totalPrice: state.totalPrice + addItem.priceValue,
      }
    }

    case types.DELETE_ITEM: {
      const { item: deleteItem } = action.payload

      // const itemIdx = state.items.findIndex(({ item }) => item.id === deleteItem.id)

      return {
        ...state,
      }
    }

    default:
      return state
  }
}

export default reducer
