import { put, takeEvery, call } from 'redux-saga/effects'

import * as types from '../types/app'
import * as actions from '../actions/app'

import settingsService from '../../services/settings'

// Fetch Settings
function* fetchSettings(action) {
  const { userId } = action.payload
  try {
    yield put(actions.requestedSettings())
    const { regionSettings, supplierSettings } = yield call(
      settingsService.getFieldsSettings,
      userId,
      ['regionSettings.currency', 'supplierSettings.restaurantName'],
    )
    yield put(
      actions.requestedSettingsSuccess({
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
