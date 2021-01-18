import { put, takeEvery, call, select } from 'redux-saga/effects'
import settingsSelectors from '../selectors/settings'

import * as types from '../types/settings'
import * as actions from '../actions/settings'

import settingsService from '../../services/settings'

// Fetch Settings
export function* fetchSettings() {
  try {
    yield put(actions.requestedSettings())
    const settings = yield call(settingsService.getSettings)
    yield put(actions.requestedSettingsSuccess(settings))
  } catch (error) {
    yield put(actions.requestedSettingsError())
  }
}

// Save Settings
export function* saveSettings() {
  const settingsState = yield select(settingsSelectors.settings)
  const { settings } = settingsState
  try {
    yield put(actions.requestedSaveSettings())
    yield call(settingsService.saveSettings, { settings })
    yield put(actions.requestedSaveSettingsSuccess())
  } catch (error) {
    yield put(actions.requestedSettingsError(error.response))
  }
}

export default function* watchSettings() {
  yield takeEvery(types.FETCH_SETTINGS, fetchSettings)
  yield takeEvery(types.SAVE_SETTINGS, saveSettings)
}
