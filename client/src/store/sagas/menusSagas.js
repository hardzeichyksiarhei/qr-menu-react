import { put, takeEvery, call } from 'redux-saga/effects'

import * as types from '../types/menus'
import * as actions from '../actions/menus'

import menusService from '../../services/menus'

// Menus
function* fetchMenus(action) {
  const { userId } = action.payload
  try {
    yield put(actions.requestedMenus())
    const menus = yield call(menusService.getAllByUserId, userId)
    yield put(actions.requestedMenusSuccess(menus))
  } catch (error) {
    yield put(actions.requestedMenusError())
  }
}

export default function* watchMenus() {
  yield takeEvery(types.FETCH_MENUS, fetchMenus)
}
