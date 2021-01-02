const menus = (state) => state.menus.menus
const deletedMenus = (state) => state.menus.menus.filter((menu) => menu.deletedAt)

export default {
  menus,
  deletedMenus,
}
