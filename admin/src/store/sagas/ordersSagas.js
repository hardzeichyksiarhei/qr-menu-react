import { put, takeEvery, call } from 'redux-saga/effects'

import * as types from '../types/orders'
import * as actions from '../actions/orders'

import ordersService from '../../services/orders'

function* fetchOrders() {
  try {
    yield put(actions.requestedOrders())
    const orders = yield call(ordersService.getAll)
    yield put(actions.requestedOrdersSuccess(orders))
  } catch (error) {
    yield put(actions.requestedOrdersError())
  }
}

export default function* watchOrders() {
  yield takeEvery(types.FETCH_ORDERS, fetchOrders)
}
