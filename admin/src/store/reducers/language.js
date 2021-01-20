import INTL_SET_LANGUAGE from '../types/language'

const initialState = {
  language: localStorage.getItem('language') || 'english',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INTL_SET_LANGUAGE: {
      localStorage.setItem('language', action.payload.language)
      return {
        language: action.payload.language,
      }
    }

    default:
      return state
  }
}

export default reducer
