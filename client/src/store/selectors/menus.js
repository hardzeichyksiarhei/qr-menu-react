const menus = (state) => state.menus.menus

const menuById = (menuId) => (state) => state.menus.menus.find((menu) => menu.id === menuId)

const categoriesByMenuId = (menuId) => (state) =>
  state.menus.menus.find((menu) => menu.id === menuId).categories

const dish = (menuId) => (categoryId) => (dishId) => (state) =>
  state.menus.menus
    .find((menu) => menu.id === menuId)
    ?.categories.find((category) => category.id === categoryId)
    ?.dishes.find((dish) => dish.id === dishId)

export default { menus, menuById, categoriesByMenuId, dish }
