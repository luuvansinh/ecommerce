import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from './../configs'
import { request } from '../utils'
// same controller call
function* fetchProductsOrder() {
  console.log("get order")
  const api = ApiConst.order_product.all()
  const order_products = yield call(request.call, api.url)
  console.log("aaa", order_products)
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