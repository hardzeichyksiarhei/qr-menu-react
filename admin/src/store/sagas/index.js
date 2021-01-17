import { all } from 'redux-saga/effects'
import watchAuth from './authSagas'
import watchMenu from './menuSagas'
import watchMenus from './menusSagas'
import watchSettings from './settingsSagas'

export default function* watchSagas() {
  yield all([watchAuth(), watchMenu(), watchMenus(), watchSettings()])
}
