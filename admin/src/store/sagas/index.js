import { all } from 'redux-saga/effects'
import watchAuth from './authSagas'
import watchMenu from './menuSagas'
import watchMenus from './menusSagas'
import watchSettings from './settingsSagas'
import watchMediafiles from './mediafilesSagas'

export default function* watchSagas() {
  yield all([watchAuth(), watchMenu(), watchMenus(), watchSettings(), watchMediafiles()])
}
