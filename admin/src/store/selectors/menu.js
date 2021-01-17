const isMenuLoading = (state) => state.menu.isMenuLoading
const menu = (state) => state.menu.menu
const menuCategories = (state) => state.menu.menu.categories

export default { isMenuLoading, menu, menuCategories }
