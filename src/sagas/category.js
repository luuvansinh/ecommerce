import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from '../configs'
import { request } from '../utils'


function* fetchCategories() {
  try {
    const api = ApiConst.category.all()
    const categories = yield call(request.call, api.url)
    yield put({
      type: 'FETCH_CATEGORIES_SUCCEEDED',
      categories
    })
  } catch (error) {
    yield put({
      type: 'FETCH_FAILED',
      error
    })
  }
}

function* watchFetchCategories() {
  yield takeLatest('FETCH_CATEGORIES', fetchCategories)
}

export {
  watchFetchCategories,
}
