import { all } from 'redux-saga/effects'
import watchAuth from './authSagas'
import watchMenus from './menusSagas'
import watchSettings from './settingsSagas'

export default function* watchSagas() {
  yield all([watchAuth(), watchMenus(), watchSettings()])
}
