import { all } from 'redux-saga/effects'
import watchApp from './appSagas'
import watchMenus from './menusSagas'

export default function* watchSagas() {
  yield all([watchApp(), watchMenus()])
}
