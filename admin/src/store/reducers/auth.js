import Cookies from 'js-cookie'
import * as types from '../types/auth'

const initialState = {
  isLoggedIn: Cookies.get('isLoggedIn') || false,
  user: null,
  token: Cookies.get('token') || null,
  isLoading: false,
  isErrors: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // User
    case types.REQUESTED_USER: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case types.REQUESTED_USER_SUCCEEDED: {
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      }
    }
    case types.REQUESTED_USER_FAILED: {
      return {
        ...state,
        isLoading: false,
        isErrors: true,
      }
    }

    // Login
    case types.REQUESTED_LOGIN: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case types.REQUESTED_LOGIN_SUCCEEDED: {
      Cookies.set('isLoggedIn', action.payload.isLoggedIn, { expires: 1 })
      Cookies.set('token', action.payload.token, { expires: 1 })
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        token: action.payload.token,
        isLoading: false,
      }
    }
    case types.REQUESTED_LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        isErrors: true,
      }
    }

    // Registration
    case types.REQUESTED_REGISTRATION: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case types.REQUESTED_REGISTRATION_SUCCEEDED: {
      Cookies.set('isLoggedIn', action.payload.isLoggedIn, { expires: 1 })
      Cookies.set('token', action.payload.token, { expires: 1 })
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        token: action.payload.token,
        isLoading: false,
      }
    }
    case types.REQUESTED_REGISTRATION_FAILED: {
      return {
        ...state,
        isLoading: false,
        isErrors: true,
      }
    }

    case types.LOGOUT: {
      Cookies.remove('isLoggedIn')
      Cookies.remove('token')
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    }
    default:
      return state
  }
}

export default reducer
