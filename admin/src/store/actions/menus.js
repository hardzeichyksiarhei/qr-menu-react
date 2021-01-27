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

export const addMenu = (menu) => ({
  type: types.ADD_MENU,
  payload: { menu },
})

export const updateMenu = (menuId, data) => ({
  type: types.UPDATE_MENU,
  payload: { menuId, data },
})

export const deleteMenu = (menuId) => ({
  type: types.DELETE_MENU,
  payload: { menuId },
})

export const clearMenus = () => ({
  type: types.CLEAR_MENUS,
})
