import { put, takeLatest, call, select } from 'redux-saga/effects'
import { Alert } from 'react-native';
import { request } from '../utils'
import { ApiConst } from '../configs'

/**
 * ****************** FUNCTION **************
 */

function* fetchProducts() {
  const api = ApiConst.product.all()
  yield put({
    type: 'FETCH_PRODUCTS_SUCCEEDED',
    payload: {
      refreshing: true
    }
  })
  const { products, filter } = yield select(state => state.products)
  const { page, number_products, total } = filter
  if (page * number_products >= total) {
    return yield put({
      type: 'FETCH_PRODUCTS_SUCCEEDED',
      payload: {
        refreshing: false
      }
    })
  }
  const response = yield call(request.call, api.url, {
    method: api.method,
    body: {
      ...filter,
      page: filter.page + 1
    }
  })
  const { data, paginator } = response.result
  
  yield put({
    type: 'FETCH_PRODUCTS_SUCCEEDED',
    payload: {
      products: [...products,...data],
      filter: {
        total: paginator.total,
        perpage: paginator.per_page,
        page: paginator.current_page
      },
      refreshing: false
    }
  })
}

function* fetchProductDetail({ productId }) {
  const api = ApiConst.product.show(productId)
  const response = yield call(request.call, api.url)
  yield put({
    type: 'PRODUCT_DETAIL',
    product: response.result
  })
}

function* comment({ payload }) {
  const api = ApiConst.product.comment()
  const response = yield call(request.call, api.url, {
    method: api.method,
    body: payload,
  })
  // console.log({ response })
  const { success, result, error } = response
  if (!success) {
    return Alert.alert('Oops', error)
  }
  const { product } = yield select(state => state)
  product.comments.push(result)
  console.log({ product })
  yield put({
    type: 'PRODUCT_DETAIL',
    product,
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

function* watchComment() {
  yield takeLatest('COMMENT', comment)
}
export {
  watchFetchProducts,
  watchComment,
  watchFetchProductDetail,
}
