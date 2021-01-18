import { put, takeEvery, call } from 'redux-saga/effects'

import * as types from '../types/auth'
import * as actions from '../actions/auth'

import * as userService from '../../services/users'
import * as authService from '../../services/auth'

// User
const asyncUser = async () => {
  const user = await userService.getAuthUser()
  return user
}

export function* fetchUser() {
  try {
    yield put(actions.requestedUser())
    const user = yield call(asyncUser)
    yield put(actions.requestedUserSuccess(user))
  } catch (error) {
    const { data } = error.response
    yield put(actions.requestedUserError(data.message))
  }
}

// Login
const asyncLogin = async ({ email, password }) => {
  const { token } = await authService.login(email, password)
  return token
}

function* login(action) {
  const { email, password } = action.payload

  try {
    yield put(actions.requestedLogin())
    const token = yield call(asyncLogin, { email, password })
    yield put(actions.requestedLoginSuccess(token))
  } catch (error) {
    const { data } = error.response
    yield put(actions.requestedLoginError(data.message))
  }
}

// Registration
const asyncRegistration = async ({ email, password }) => {
  await authService.registration(email, password)
}

function* registration(action) {
  const { email, password, passwordConfirm } = action.payload

  try {
    yield put(actions.requestedRegistration())
    yield call(asyncRegistration, {
      email,
      password,
      passwordConfirm,
    })
    yield put(actions.requestedRegistrationSuccess())
  } catch (error) {
    const { data } = error.response
    yield put(actions.requestedRegistrationError(data.message))
  }
}

export default function* watchAuth() {
  yield takeEvery(types.LOGIN, login)
  yield takeEvery(types.REGISTRATION, registration)
  yield takeEvery(types.FETCH_USER, fetchUser)
}
