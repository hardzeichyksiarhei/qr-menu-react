import * as types from '../types/menus'

const initialState = {
  menus: [],

  isMenusLoading: true,
  isErrors: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Fetch menus */
    case types.REQUESTED_MENUS: {
      return {
        ...state,
        isMenusLoading: true,
      }
    }
    case types.REQUESTED_MENUS_SUCCEEDED: {
      return {
        ...state,
        menus: action.payload.menus,
        isMenusLoading: false,
      }
    }
    case types.REQUESTED_MENUS_FAILED: {
      return {
        ...state,
        isErrors: true,
        isMenusLoading: false,
      }
    }

    case types.ADD_MENU: {
      const { menu } = action.payload
      return {
        ...state,
        menus: [...state.menus, menu],
      }
    }

    case types.DELETE_MENU: {
      const { menuId } = action.payload
      return {
        ...state,
        menus: state.menus.filter((menu) => menu.id !== menuId),
      }
    }

    case types.CLEAR_MENUS: {
      return {
        ...state,
        menus: [],
      }
    }

    default:
      return state
  }
}

export default reducer
