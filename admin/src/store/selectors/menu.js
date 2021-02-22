import isEqual from 'react-fast-compare'

const isMenuLoading = (state) => state.menu.isMenuLoading
const isMenuBusy = (state) => state.menu.isMenuBusy
const menu = (state) => state.menu.menu
const menuCategories = (state) => state.menu.menu.categories

const isMenuEqualCache = (state) => isEqual(state.menu.menu, state.menu.cacheMenu)

const categoryById = (categoryId) => (state) =>
  state.menu.menu.categories.find((category) => category.id === categoryId)
const dishesByCategoryId = (categoryId) => (state) => {
  const categpry = state.menu.menu.categories.find((category) => category.id === categoryId)
  return categpry ? categpry.dishes : []
}

const selectedCategoryId = (state) => state.menu.selectedCategoryId

export default {
  isMenuLoading,
  isMenuBusy,
  menu,
  menuCategories,
  isMenuEqualCache,
  categoryById,
  dishesByCategoryId,
  selectedCategoryId,
}
