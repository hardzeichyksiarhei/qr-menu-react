import { all } from 'redux-saga/effects'
import watchMenus from './menusSagas'

export default function* watchSagas() {
  yield all([ watchMenus()])
}