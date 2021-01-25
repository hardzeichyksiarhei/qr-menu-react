import * as types from '../types/mediafiles'

// eslint-disable-next-line import/prefer-default-export
export const toggleMediafiles = (toggle) => ({
  type: types.TOGGLE_MEDIAFILES,
  payload: { toggle },
})
