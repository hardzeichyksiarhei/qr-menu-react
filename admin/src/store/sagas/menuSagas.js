import { put, takeEvery, call, select } from 'redux-saga/effects'

import * as types from '../types/menu'
import * as actions from '../actions/menu'

import menusService from '../../services/menus'

// Fetch Menu
function* fetchMenu(menuId) {
  try {
    yield put(actions.requestedMenu())
    const menu = yield call(menusService.getById(menuId))
    yield put(actions.requestedMenuSuccess(menu))
  } catch (error) {
    yield put(actions.requestedMenuError(error.response))
  }
}

// Save Menu
function* saveMenu() {
  const menu = select((state) => state.menu.menu)
  try {
    yield put(actions.requestedSAveMenu())
    const { menuId } = yield call(menusService.save(menu))
    yield put(actions.requestedSaveMenuSuccess(menuId))
  } catch (error) {
    yield put(actions.requestedSaveMenuError(error.response))
  }
}

export default function* watchMenus() {
  yield takeEvery(types.FETCH_MENUS, fetchMenu)
  yield takeEvery(types.SAVE_MENU, saveMenu)
}
