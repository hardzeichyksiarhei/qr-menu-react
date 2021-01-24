const isMenuLoading = (state) => state.menu.isMenuLoading
const menu = (state) => state.menu.menu
const menuCategories = (state) => state.menu.menu.categories

const categoryById = (categoryId) => (state) =>
  state.menu.menu.categories.find((category) => category.id === categoryId)
const dishesByCategoryId = (categoryId) => (state) => {
  const categpry = state.menu.menu.categories.find((category) => category.id === categoryId)
  return categpry ? categpry.dishes : []
}

const selectedCategoryId = (state) => state.menu.selectedCategoryId

export default {
  isMenuLoading,
  menu,
  menuCategories,
  categoryById,
  dishesByCategoryId,
  selectedCategoryId,
}
