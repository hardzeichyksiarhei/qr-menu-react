import * as types from '../types/menus'

// Menus
export const fetchMenus = () => ({
  type: types.FETCH_MENUS,
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
