import { put, takeEvery, call } from 'redux-saga/effects'

import * as types from '../types/mediafiles'
import * as actions from '../actions/mediafiles'

import mediafilesService from '../../services/mediafiles'

// Fetch Photos

function* fetchPhotos() {
  try {
    yield put(actions.requestedPhotos())
    const photos = yield call(mediafilesService.getAllPhotos)
    yield put(actions.requestedPhotosSuccess(photos))
  } catch (error) {
    yield put(actions.requestedPhotosError())
  }
}

export default function* watchMediafiles() {
  yield takeEvery(types.FETCH_PHOTOS, fetchPhotos)
}
