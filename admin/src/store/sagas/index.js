import { all } from 'redux-saga/effects'
import watchAuth from './authSagas'

export default function* watchSagas() {
  yield all([watchAuth()])
}
