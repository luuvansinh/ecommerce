import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from './../configs'
import { request } from '../utils'
// same controller call
function* fetchUser() {
  const api = ApiConst.user.detail()
  const user = yield call(request.call, api.url)
  yield put({
    type: 'FETCH_USER_SUCCEEDED',
    user
  })
}

function* fetchOrders({ payload }) {
  const api = ApiConst.order_product.all()
  const response = yield call(request.call, api.url, {
    method: api.method,
    body: payload,
  })
  const { data, paginator: { total, per_page, current_page } } = response.result
  yield put({
    type: 'FETCH_ORDERS_SUCCEEDED',
    payload: {
      orders: data,
      filter: {
        total,
        perpage: per_page,
        page: current_page,
      }
    }
  })
}

function* watchFetchUser() {
  yield takeLatest('FETCH_USER', fetchUser)
}

function* watchFetchOrders() {
  yield takeLatest('FETCH_ORDERS', fetchOrders)
}

export {
  watchFetchUser,
  watchFetchOrders,
}
