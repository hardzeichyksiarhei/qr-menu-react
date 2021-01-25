import Cookies from 'js-cookie'
import * as types from '../types/auth'

const initialState = {
  user: null,
  token: Cookies.get('token') || null,
  isLoading: false,

  isLoginError: false,
  isRegistrationError: false,
  errorMessage: null,

  isRegistrated: false,
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
      localStorage.setItem('userId', action.payload.user.id)
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
        errorMessage: action.payload.message,
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

        isLoginError: true,
        errorMessage: action.payload.message,
      }
    }

    // Registration
    case types.REQUESTED_REGISTRATION: {
      return {
        ...state,
        isLoading: true,
        isRegistrated: false,
      }
    }
    case types.REQUESTED_REGISTRATION_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        isRegistrated: true,
      }
    }
    case types.REQUESTED_REGISTRATION_FAILED: {
      return {
        ...state,
        isLoading: false,

        isRegistrationError: true,
        errorMessage: action.payload.message,
      }
    }

    case types.CLEAR_ERRORS: {
      return {
        ...state,
        isLoginError: false,
        isRegistrationError: false,
        errorMessage: null,
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
