import { all } from 'redux-saga/effects'
import watchAuth from './authSagas'
import watchMenus from './menusSagas'

export default function* watchSagas() {
  yield all([watchAuth(), watchMenus()])
}
