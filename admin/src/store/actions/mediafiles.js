import * as types from '../types/mediafiles'

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
