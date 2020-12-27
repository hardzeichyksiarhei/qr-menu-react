import axios from 'axios'

import { put, takeEvery, call /* select */ } from 'redux-saga/effects'

import * as types from '../types/auth'
import * as actions from '../actions/auth'

// User

const asyncUser = async () => {
  // Request server
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')

  return data
}

function* fetchUser() {
  try {
    yield put(actions.requestedUser())
    const user = yield call(asyncUser)
    yield put(actions.requestedUserSuccess(user))
  } catch (error) {
    yield put(actions.requestedUserError())
  }
}

// Login
const asyncLogin = async (/* { email, password } */) => {
  await axios.get('https://jsonplaceholder.typicode.com/users/1')

  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}

function* login(action) {
  const { email, password } = action.payload

  try {
    yield put(actions.requestedLogin())
    const token = yield call(asyncLogin, { email, password })
    yield put(actions.requestedLoginSuccess(token))
    yield put(actions.fetchUser())
  } catch (error) {
    yield put(actions.requestedLoginError())
  }
}

// Registration
const asyncRegistration = async (/* { email, password, passwordConfirm } */) => {
  // Request server
  const { data } = { data: 'token' }

  return data
}

function* registration(action) {
  const { email, password, passwordConfirm } = action.payload

  try {
    yield put(actions.requestedRegistration())
    const token = yield call(asyncRegistration, {
      email,
      password,
      passwordConfirm,
    })
    yield put(actions.requestedRegistrationSuccess(token))
    yield put(actions.fetchUser())
  } catch (error) {
    yield put(actions.requestedRegistrationError())
  }
}

export default function* watchAuth() {
  yield takeEvery(types.LOGIN, login)
  yield takeEvery(types.REGISTRATION, registration)
  yield takeEvery(types.FETCH_USER, fetchUser)
}
