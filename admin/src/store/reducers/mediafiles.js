import * as types from '../types/mediafiles'

const initialState = {
  isVisible: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MEDIAFILES: {
      const { toggle } = action.payload
      return {
        ...state,
        isVisible: toggle,
      }
    }

    default:
      return state
  }
}

export default reducer
