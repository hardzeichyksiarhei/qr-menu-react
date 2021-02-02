const menus = (state) => state.menus.menus

const menuById = (menuId) => (state) => state.menus.menus.find((menu) => menu.id === menuId)

const categoriesByMenuId = (menuId) => (state) =>
  state.menus.menus
    .find((menu) => menu.id === menuId)
    ?.categories.filter((category) => category.isVisible)

const category = (menuId) => (categoryId) => (state) =>
  state.menus.menus
    .find((menu) => menu.id === menuId)
    ?.categories.find((category) => category.id === categoryId)

const dish = (menuId) => (categoryId) => (dishId) => (state) =>
  state.menus.menus
    .find((menu) => menu.id === menuId)
    ?.categories.find((category) => category.id === categoryId)
    ?.dishes.find((dish) => dish.id === dishId)

export default { menus, menuById, categoriesByMenuId, category, dish }
