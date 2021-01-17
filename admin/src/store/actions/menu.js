import * as types from '../types/menu'

// Save Menu
export const saveMenu = () => ({
  type: types.SAVE_MENU,
})

export const requestedSaveMenu = () => ({
  type: types.REQUESTED_SAVE_MENU,
})

export const requestedSaveMenuSuccess = (menuId) => ({
  type: types.REQUESTED_SAVE_MENU_SUCCEEDED,
  payload: { menuId },
})

export const requestedSaveMenuError = (error) => ({
  type: types.REQUESTED_SAVE_MENU_FAILED,
  payload: { error },
})

// Fetch Menu
export const fetchMenu = (menuId) => ({
  type: types.FETCH_MENU,
  payload: { menuId },
})

export const requestedMenu = () => ({
  type: types.REQUESTED_MENU,
})

export const requestedMenuSuccess = (menu) => ({
  type: types.REQUESTED_MENU_SUCCEEDED,
  payload: { menu },
})

export const requestedMenuError = (error) => ({
  type: types.REQUESTED_MENU_FAILED,
  payload: { error },
})

// Categories
export const setCategories = (categories) => ({
  type: types.SET_CATEGORIES,
  payload: { categories },
})
