import Cookies from 'js-cookie'
import * as types from '../types/auth'

const initialState = {
  user: null,
  token: Cookies.get('token') || null,
  isLoading: false,

  isError: false,
  errorMessage: null,
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
        isError: true,
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
      Cookies.set('token', action.payload.token, { expires: 1 })
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
      }
    }
    case types.REQUESTED_LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
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
      Cookies.set('token', action.payload.token, { expires: 1 })
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
      }
    }
    case types.REQUESTED_REGISTRATION_FAILED: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload.message,
      }
    }

    case types.LOGOUT: {
      Cookies.remove('token')
      return {
        ...state,
        user: null,
        token: null,
      }
    }
    default:
      return state
  }
}

export default reducer
