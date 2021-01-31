import * as types from '../types/app'

const initialState = {
  settings: {
    timeFormat: null,
    defaultCurrency: null,
  },
  isSettingsLoading: false,
  settingsError: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTED_SETTINGS: {
      return {
        ...state,
        isSettingsLoading: true,
      }
    }
    case types.REQUESTED_SETTINGS_SUCCEEDED: {
      const { settings } = action.payload
      return {
        ...state,
        settings,
        isSettingsLoading: false,
      }
    }
    case types.REQUESTED_SETTINGS_FAILED: {
      const { error } = action.payload
      return {
        ...state,
        isSettingsLoading: false,
        settingsError: error,
      }
    }
    case types.UPDATE_SETTINGS: {
      const { settings } = action.payload
      return {
        ...state,
        settings: { ...state.settings, ...settings },
      }
    }
    default:
      return state
  }
}

export default reducer
