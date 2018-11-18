import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from './../configs'
import { request } from '../utils'
// same controller call
function* fetchProductsOrder() {
  const api = ApiConst.order_product.all()
  const order_products = yield call(request.call, api.url)
  yield put({
    type: 'FETCH_PRODUCTS_ORDER_SUCCEEDED',
    order_products
  })
}

function* watchFetchProductsOrder() {
  yield takeLatest('FETCH_PRODUCTS_ORDER', fetchProductsOrder)
}

export {
  watchFetchProductsOrder,
}