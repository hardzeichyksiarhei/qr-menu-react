import * as types from '../types/menus'

// Menus
export const fetchMenus = (userId) => ({
  type: types.FETCH_MENUS,
  payload: { userId },
})

export const requestedMenus = () => ({
  type: types.REQUESTED_MENUS,
})

export const requestedMenusSuccess = (menus) => ({
  type: types.REQUESTED_MENUS_SUCCEEDED,
  payload: { menus },
})

export const requestedMenusError = () => ({
  type: types.REQUESTED_MENUS_FAILED,
})

export const clearMenus = () => ({
  type: types.CLEAR_MENUS,
})
