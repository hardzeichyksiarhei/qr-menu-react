import * as types from '../types/settings'

// Fetch Settings
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

// Update Settings

export const updateSettings = (settings, field, subField, value) => ({
  type: types.UPDATE_SETTINGS,
  payload: { settings, field, subField, value },
})

// Save Settings

export const saveSettings = () => ({
  type: types.SAVE_SETTINGS,
})

export const requestedSaveSettings = () => ({
  type: types.REQUESTED_SAVE_SETTINGS,
})

export const requestedSaveSettingsSuccess = () => ({
  type: types.REQUESTED_SAVE_SETTINGS_SUCCEEDED,
})

export const requestedSaveSettingsError = (error) => ({
  type: types.REQUESTED_SAVE_SETTINGS_FAILED,
  payload: { error },
})

export const clearSettings = () => ({
  type: types.CLEAR_SETTINGS,
})
