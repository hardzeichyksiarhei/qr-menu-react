import { put, takeEvery, call } from 'redux-saga/effects'

import * as types from '../types/settings'
import * as actions from '../actions/settings'

import settingsService from '../../services/settings'

// Settings
export function* fetchSettings() {
  try {
    yield put(actions.requestedSettings())
    const settings = yield call(settingsService.getSettings)
    yield put(actions.requestedSettingsSuccess(settings))
  } catch (error) {
    yield put(actions.requestedSettingsError())
  }
}

export default function* watchSettings() {
  yield takeEvery(types.FETCH_SETTINGS, fetchSettings)
}
