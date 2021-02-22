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

// Fetch Default Menu
export const fetchDefaultMenu = () => ({
  type: types.FETCH_DEFAULT_MENU,
})

// Menu
export const update = (menu) => ({
  type: types.UPDATE_MENU,
  payload: { menu },
})

export const discardMenu = () => ({
  type: types.DISCARD_MENU,
})

export const clearMenu = () => ({
  type: types.CLEAR_MENU,
})

// Categories
export const setCategories = (categories) => ({
  type: types.SET_CATEGORIES,
  payload: { categories },
})

export const addCategory = (category) => ({
  type: types.ADD_CATEGORY,
  payload: { category },
})

export const updateCategory = (categoryId, category) => ({
  type: types.UPDATE_CATEGORY,
  payload: { categoryId, category },
})

export const deleteCategory = (categoryId) => ({
  type: types.DELETE_CATEGORY,
  payload: { categoryId },
})

// Dishes
export const setDishes = (categoryId, dishes) => ({
  type: types.SET_DISHES,
  payload: { categoryId, dishes },
})

export const addDish = (categoryId, dish) => ({
  type: types.ADD_DISH,
  payload: { categoryId, dish },
})

export const updateDish = (categoryId, dishId, dish) => ({
  type: types.UPDATE_DISH,
  payload: { categoryId, dishId, dish },
})

export const deleteDish = (categoryId, dishId) => ({
  type: types.DELETE_DISH,
  payload: { categoryId, dishId },
})

// Other
export const setSelectedCategoryId = (categoryId) => ({
  type: types.SET_SELECTED_CATEGORY_ID,
  payload: { categoryId },
})
