import * as types from '../types/app'

// Fetch Settings
export const fetchSettings = () => ({
  type: types.FETCH_SETTING,
})

export const requestedSettings = () => ({
  type: types.REQUESTED_SETTINGS,
})

export const requestedSettingsSuccess = (settings) => ({
  type: types.REQUESTED_SETTINGS_SUCCEEDED,
  payload: { settings },
})

export const requestedSettingsError = (error) => ({
  type: types.REQUESTED_SETTINGS_FAILED,
  payload: { error },
})

// Update Settings
export const updateSettings = (settings) => ({
  type: types.UPDATE_SETTINGS,
  payload: { settings },
})
