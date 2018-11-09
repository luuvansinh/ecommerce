import { put, takeLatest, call } from 'redux-saga/effects'
import { request } from '../utils'
import { ApiConst } from '../configs'

/**
 * ****************** FUNCTION **************
 */

function* fetchProducts() {
  const api = ApiConst.product.all()
  const response = yield call(request.call, api.url)
  // const { data } = response.result
  yield put({
    type: 'FETCH_PRODUCTS_SUCCEEDED',
    products: response
  })
}

function* fetchProductDetail({ productId }) {
  const api = ApiConst.product.show(productId)
  const product = yield call(request.call, api.url)
  yield put({
    type: 'PRODUCT_DETAIL',
    product
  })
}

/**
 * ****************** WATCHER *****************
 */

function* watchFetchProducts() {
  yield takeLatest('FETCH_PRODUCTS', fetchProducts)
}

function* watchFetchProductDetail() {
  yield takeLatest('FETCH_PRODUCT_DETAIL', fetchProductDetail)
}

export {
  watchFetchProducts,
  watchFetchProductDetail,
}
