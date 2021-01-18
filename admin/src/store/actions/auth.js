import * as types from '../types/auth'

// User
export const fetchUser = () => ({
  type: types.FETCH_USER,
})

export const requestedUser = () => ({
  type: types.REQUESTED_USER,
})

export const requestedUserSuccess = (user) => ({
  type: types.REQUESTED_USER_SUCCEEDED,
  payload: { user },
})

export const requestedUserError = (message) => ({
  type: types.REQUESTED_USER_FAILED,
  payload: { message },
})

// Login
export const login = (email, password) => ({
  type: types.LOGIN,
  payload: { email, password },
})

export const requestedLogin = () => ({
  type: types.REQUESTED_LOGIN,
})

export const requestedLoginSuccess = (token) => ({
  type: types.REQUESTED_LOGIN_SUCCEEDED,
  payload: { token },
})

export const requestedLoginError = (message) => ({
  type: types.REQUESTED_LOGIN_FAILED,
  payload: { message },
})

// Registration
export const registration = (email, password) => ({
  type: types.REGISTRATION,
  payload: { email, password },
})

export const requestedRegistration = () => ({
  type: types.REQUESTED_REGISTRATION,
})

export const requestedRegistrationSuccess = () => ({
  type: types.REQUESTED_REGISTRATION_SUCCEEDED,
})

export const requestedRegistrationError = (message) => ({
  type: types.REQUESTED_REGISTRATION_FAILED,
  payload: { message },
})

export const clearErrors = () => ({
  type: types.CLEAR_ERRORS,
})

export const logout = () => ({
  type: types.LOGOUT,
})
