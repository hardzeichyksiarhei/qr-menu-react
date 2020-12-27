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

export const requestedUserError = () => ({
  type: types.REQUESTED_USER_FAILED,
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
  payload: { token, isLoggedIn: true },
})

export const requestedLoginError = () => ({
  type: types.REQUESTED_LOGIN_FAILED,
})

// Registration
export const registration = (email, password) => ({
  type: types.REGISTRATION,
  payload: { email, password },
})

export const requestedRegistration = () => ({
  type: types.REQUESTED_REGISTRATION,
})

export const requestedRegistrationSuccess = (token) => ({
  type: types.REQUESTED_REGISTRATION_SUCCEEDED,
  payload: { token, isLoggedIn: true },
})

export const requestedRegistrationError = () => ({
  type: types.REQUESTED_REGISTRATION_FAILED,
})

export const logout = () => ({
  type: types.LOGOUT,
})
