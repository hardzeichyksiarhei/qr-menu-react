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