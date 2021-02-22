const isMenusLoading = (state) => state.menus.isMenusLoading
const allMenus = (state) => state.menus.menus.filter((menu) => !menu.deletedAt)
const deletedMenus = (state) => state.menus.menus.filter((menu) => menu.deletedAt)

export default {
  isMenusLoading,
  allMenus,
  deletedMenus,
}
