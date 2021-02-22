import { put, takeEvery, call, select } from 'redux-saga/effects'

import { message } from 'antd'

import * as types from '../types/menu'
import * as actions from '../actions/menu'

import authSelectors from '../selectors/auth'
import menuSelectors from '../selectors/menu'
import appSelectors from '../selectors/app'

import menusService from '../../services/menus'

// Fetch Menu
function* fetchMenu(action) {
  const { menuId } = action.payload

  try {
    yield put(actions.requestedMenu())
    const menu = yield call(menusService.getById, { menuId })
    yield put(actions.requestedMenuSuccess(menu))
  } catch (error) {
    yield put(actions.requestedMenuError(error.response))
  }
}

// Fetch Default Menu
function* fetchDefaultMenu() {
  const user = yield select(authSelectors.user)
  try {
    yield put(actions.requestedMenu())
    const menu = yield call(menusService.getDefaultMenu)
    yield put(
      actions.requestedMenuSuccess({
        ...menu,
        userId: user.id,
      }),
    )
  } catch (error) {
    yield put(actions.requestedMenuError(error.response))
  }
}

// Save Menu
function* saveMenu() {
  const user = yield select(authSelectors.user)
  const menu = yield select(menuSelectors.menu)
  const { defaultCurrency } = yield select(appSelectors.settings)

  try {
    message.loading({ content: 'Save in progress...', key: 'save-menu' })
    yield put(actions.requestedSaveMenu())
    const { menuId } = yield call(menusService.save, {
      ...menu,
      userId: menu.userId || user.id,
      priceCurrency: menu.priceCurrency || defaultCurrency,
    })
    yield put(actions.requestedSaveMenuSuccess(menuId))
    message.success({ content: 'Saved!', key: 'save-menu', duration: 2 })
  } catch (error) {
    yield put(actions.requestedSaveMenuError(error.response))
    message.error({ content: 'Error!', key: 'save-menu', duration: 2 })
  }
}

export default function* watchMenus() {
  yield takeEvery(types.FETCH_MENU, fetchMenu)
  yield takeEvery(types.FETCH_DEFAULT_MENU, fetchDefaultMenu)
  yield takeEvery(types.SAVE_MENU, saveMenu)
}
