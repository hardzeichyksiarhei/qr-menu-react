import { all } from 'redux-saga/effects'
import watchAuth from './authSagas'
import watchMenu from './menuSagas'
import watchMenus from './menusSagas'
import watchSettings from './settingsSagas'
import watchOrders from './ordersSagas'
import watchApp from './appSagas'

export default function* watchSagas() {
  yield all([watchAuth(), watchMenu(), watchMenus(), watchSettings(), watchOrders(), watchApp()])
}
