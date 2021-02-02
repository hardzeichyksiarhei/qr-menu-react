import * as types from '../types/order'

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: { item },
})
