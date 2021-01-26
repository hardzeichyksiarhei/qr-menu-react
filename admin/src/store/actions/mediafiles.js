import * as types from '../types/mediafiles'

// Modal
export const toggleModal = (toggle) => ({
  type: types.TOGGLE_MODAL,
  payload: { toggle },
})

// Fetch Photos
export const fetchPhotos = () => ({
  type: types.FETCH_PHOTOS,
})

export const requestedPhotos = () => ({
  type: types.REQUESTED_PHOTOS,
})

export const requestedPhotosSuccess = (photos) => ({
  type: types.REQUESTED_PHOTOS_SUCCEEDED,
  payload: { photos },
})

export const requestedPhotosError = () => ({
  type: types.REQUESTED_PHOTOS_FAILED,
})

// Clear Photos
export const clearPhotos = () => ({
  type: types.CLEAR_PHOTOS,
})
