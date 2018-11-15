import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from '../configs'
import { request } from '../utils'

/**
 * *************************************
 *               SAGA
 * *************************************
 */

function* fetchCategories() {
  const api = ApiConst.category.all()
  const response = yield call(request.call, api.url)
  const { result } = response
  yield put({
    type: 'FETCH_CATEGORIES_SUCCEEDED',
    categories: result
  })
}

function* fetchCategory({ categoryId }) {
  const api = ApiConst.category.show(categoryId)
  const response = yield call(request.call, api.url)
  const { children_products, parents_products } = response.result

  yield put({
    type: 'FETCH_CATEGORY_SUCCEEDED',
    payload: [...children_products, ...parents_products]
  })
}

/**
 * *************************************
 *               WATCHER
 * *************************************
 */

function* watchFetchCategories() {
  yield takeLatest('FETCH_CATEGORIES', fetchCategories)
}

function* watchFetchCategory() {
  yield takeLatest('FETCH_CATEGORY', fetchCategory)
}

export {
  watchFetchCategories,
  watchFetchCategory,
}
