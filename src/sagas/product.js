import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_FAILED, FETCH_SUCCEEDED, FETCH_PRODUCTS } from '../actions/type'
import api from './api'


function* fetchProducts() {
  try {
    const products = yield api.getProducts()
    yield put({
      type: FETCH_SUCCEEDED,
      products
    })
  } catch (error) {
    yield put({
      type: FETCH_FAILED,
      error
    })
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts)
}

export {
  watchFetchProducts,
}
