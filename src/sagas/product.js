import { put, takeLatest, call } from 'redux-saga/effects'
import { request } from '../utils'
import { ApiConst } from '../configs'


function* fetchProducts() {
  try {
    const api = ApiConst.product.all()
    const products = yield call(request.call, api.url)
    yield put({
      type: 'FETCH_SUCCEEDED',
      products
    })
  } catch (error) {
    yield put({
      type: 'FETCH_FAILED',
      error
    })
  }
}

function* watchFetchProducts() {
  yield takeLatest('FETCH_PRODUCTS', fetchProducts)
}

export {
  watchFetchProducts,
}
