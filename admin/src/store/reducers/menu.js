import * as types from '../types/auth'

const initialState = {
  menu: {
    id: null,
    userId: null,
    status: 'ACTIVE', // ACTIVE | INACTIVE
    title: '',
    internalComment: '',
    photo: null,
    categories: [],
    /**
     * Categories
     *
     * id: ObjectId
     * title: String
     * dishes: Array<Dishes>
     * isPublished: Boolean
     */

    priceCurrency: null,

    createdAt: null,
    archivedAt: null,
    deletedAt: null,
  },

  isMenuLoading: false,
  isMenuBusy: false,
  isErrors: false,
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
      return {
        ...state,
        menu: action.payload.menu,
        isMenuLoading: false,
      }
    }
    case types.REQUESTED_MENU_FAILED: {
      return {
        ...state,
        isErrors: true,
        isMenuLoading: false,
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
      return {
        ...state,
        isMenuBusy: false,
      }
    }
    case types.REQUESTED_SAVE_MENU_FAILED: {
      return {
        ...state,
        isErrors: true,
        isMenuBusy: false,
      }
    }

    default:
      return state
  }
}

export default reducer
