import { put, takeEvery, call } from 'redux-saga/effects'

import * as types from '../types/app'
import * as actions from '../actions/app'

import settingsService from '../../services/settings'

// Fetch Settings
function* fetchSettings() {
  try {
    yield put(actions.requestedSettings())
    const { regionSettings, supplierSettings } = yield call(settingsService.getFieldsSettings, [
      'regionSettings.timeFormat',
      'regionSettings.currency',
      'supplierSettings.restaurantName',
    ])
    yield put(
      actions.requestedSettingsSuccess({
        timeFormat: regionSettings.timeFormat,
        defaultCurrency: regionSettings.currency,
        restaurantName: supplierSettings.restaurantName,
      }),
    )
  } catch (error) {
    yield put(actions.requestedSettingsError(error.response))
  }
}

export default function* watchApp() {
  yield takeEvery(types.FETCH_SETTING, fetchSettings)
}
