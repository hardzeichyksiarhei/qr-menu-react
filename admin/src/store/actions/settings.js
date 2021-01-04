import * as types from '../types/settings'

// Settings
export const fetchSettings = () => ({
  type: types.FETCH_SETTINGS,
})

export const requestedSettings = () => ({
  type: types.REQUESTED_SETTINGS,
})

export const requestedSettingsSuccess = (settings) => ({
  type: types.REQUESTED_SETTINGS_SUCCEEDED,
  payload: { settings },
})

export const requestedSettingsError = () => ({
  type: types.REQUESTED_SETTINGS_FAILED,
})

export const clearSettings = () => ({
  type: types.CLEAR_SETTINGS,
})
