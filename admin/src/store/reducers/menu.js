import * as types from '../types/menu'

const menuSchema = () => ({
  id: null,
  userId: null,
  isPublished: true,
  isEnabledToOrder: false,
  title: '',
  internalComment: '',
  photo: null,
  categories: [],
  priceCurrency: null,
  createdAt: null,
  deletedAt: null,
})

const initialState = {
  menu: menuSchema(),

  selectedCategoryId: null,

  isMenuLoading: false,
  isMenuBusy: false,
  menuError: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Fetch menu */
    case types.REQUESTED_MENU: {
      return {
        ...state,
        isMenuLoading: true,
      }
    }
    case types.REQUESTED_MENU_SUCCEEDED: {
      const { menu } = action.payload
      const firstCategory = menu.categories[0]

      return {
        ...state,
        menu,
        isMenuLoading: false,

        selectedCategoryId: firstCategory || null,
      }
    }
    case types.REQUESTED_MENU_FAILED: {
      return {
        ...state,
        isMenuLoading: false,
        menuError: action.payload.error,
      }
    }

    /* Save menu */
    case types.REQUESTED_SAVE_MENU: {
      return {
        ...state,
        isMenuBusy: true,
      }
    }
    case types.REQUESTED_SAVE_MENU_SUCCEEDED: {
      const { menuId } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          id: menuId,
        },
        isMenuBusy: false,
      }
    }
    case types.REQUESTED_SAVE_MENU_FAILED: {
      return {
        ...state,
        isMenuBusy: false,
        menuError: action.payload.error,
      }
    }

    case types.UPDATE_MENU: {
      const { menu } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          ...menu,
        },
      }
    }

    case types.CLEAR_MENU: {
      return {
        menu: menuSchema(),

        isMenuLoading: false,
        isMenuBusy: false,
        menusError: null,
      }
    }

    /* Categories */
    case types.SET_CATEGORIES: {
      const { categories } = action.payload
      return {
        ...state,
        menu: { ...state.menu, categories },
      }
    }

    case types.ADD_CATEGORY: {
      const { category } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          categories: state.menu.categories.concat(category),
        },
      }
    }

    case types.UPDATE_CATEGORY: {
      const { categoryId, data } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          categories: state.menu.categories.map((category) =>
            category.id === categoryId ? { ...category, ...data } : category,
          ),
        },
      }
    }

    case types.DELETE_CATEGORY: {
      const { categoryId } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          categories: state.menu.categories.filter((category) => category.id !== categoryId),
        },
      }
    }

    /* Dishes */
    case types.SET_DISHES: {
      const { categoryId, dishes } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          categories: state.menu.categories.map((category) =>
            category.id === categoryId ? { ...category, dishes } : category,
          ),
        },
      }
    }

    case types.ADD_DISH: {
      const { categoryId, dish } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          categories: state.menu.categories.map((category) => {
            if (category.id === categoryId) {
              return {
                ...category,
                dishes: category.dishes.concat(dish),
              }
            }
            return category
          }),
        },
      }
    }

    case types.UPDATE_DISH: {
      const { categoryId, dishId, data } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          categories: state.menu.categories.map((category) => {
            if (category.id === categoryId) {
              return {
                ...category,
                dishes: category.dishes.map((dish) =>
                  dish.id === dishId ? { ...dish, ...data } : dish,
                ),
              }
            }
            return category
          }),
        },
      }
    }

    case types.DELETE_DISH: {
      const { categoryId, dishId } = action.payload
      return {
        ...state,
        menu: {
          ...state.menu,
          categories: state.menu.categories.map((category) => {
            if (category.id === categoryId) {
              return {
                ...category,
                dishes: category.dishes.filter((dish) => dish.id !== dishId),
              }
            }
            return category
          }),
        },
      }
    }

    /* Other */
    case types.SET_SELECTED_CATEGORY_ID: {
      const { categoryId } = action.payload
      return {
        ...state,
        selectedCategoryId: categoryId,
      }
    }

    default:
      return state
  }
}

export default reducer
