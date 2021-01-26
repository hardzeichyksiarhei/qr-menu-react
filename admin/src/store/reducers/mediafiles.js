import * as types from '../types/mediafiles'

const initialState = {
  photos: [],
  isModalVisible: false,
  isPhotosLoading: false,
  isPhotosLoadingError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL: {
      const { toggle } = action.payload
      return {
        ...state,
        isModalVisible: toggle,
      }
    }
    /* Fetch Photos */
    case types.REQUESTED_PHOTOS: {
      return {
        ...state,
        isPhotosLoading: true,
      }
    }

    case types.REQUESTED_PHOTOS_SUCCEEDED: {
      return {
        ...state,
        photos: action.payload.photos,
        isPhotosLoading: false,
      }
    }

    case types.REQUESTED_PHOTOS_FAILED: {
      return {
        ...state,
        isPhotosLoading: false,
        isPhotosLoadingError: true,
      }
    }

    case types.CLEAR_PHOTOS: {
      return {
        ...state,
        photos: [],
      }
    }

    default:
      return state
  }
}

export default reducer
