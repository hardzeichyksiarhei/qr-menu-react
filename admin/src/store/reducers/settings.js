import * as types from '../types/settings'

const initialState = {
  settings: null,

  isSettingsLoading: true,
  isErrors: false,
  isSettingsBusy: false,
  settingsSaveError: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* Fetch settings */
    case types.REQUESTED_SETTINGS: {
      return {
        ...state,
        isSettingsLoading: true,
      }
    }
    case types.REQUESTED_SETTINGS_SUCCEEDED: {
      return {
        ...state,
        settings: action.payload.settings,
        isSettingsLoading: false,
      }
    }

    case types.REQUESTED_SETTINGS_FAILED: {
      return {
        ...state,
        isErrors: true,
        isSettingsLoading: false,
      }
    }

    /* Update settings */
    case types.UPDATE_SETTINGS: {
      const { field, subField, value } = action.payload
      return {
        ...state,
        settings: {
          ...state.settings,
          [field]: {
            ...state.settings[field],
            [subField]: value,
          },
        },
        isSettingsLoading: false,
      }
    }

    /* Save settings */
    case types.REQUESTED_SAVE_SETTINGS: {
      return {
        ...state,
        isSettingsBusy: true,
      }
    }

    case types.REQUESTED_SAVE_SETTINGS_SUCCEEDED: {
      return {
        ...state,
        isSettingsBusy: false,
      }
    }

    case types.REQUESTED_SAVE_SETTINGS_FAILED: {
      return {
        ...state,
        settingsSaveError: action.payload.error,
      }
    }

    /* Clear settings */
    case types.CLEAR_SETTINGS: {
      return {
        ...state,
        settings: null,
      }
    }

    default:
      return state
  }
}

export default reducer
