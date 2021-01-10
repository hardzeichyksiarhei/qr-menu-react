import * as types from '../types/settings'

const initialState = {
  settings: null,

  isSettingsLoading: true,
  isErrors: false,
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

    case types.UPDATE_SETTINGS: {
      // field: 'regionSettings.country'
      const { /* settings, */ field, subField, value } = action.payload
      // settings[field][subField] = value
      return {
        ...state,
        settings: {
          ...state.settings,
          [field]: {
            ...state.settings[field],
            [subField]: value,
          },
        },
      }
    }

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
