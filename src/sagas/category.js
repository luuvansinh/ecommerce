import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from '../configs'
import { request } from '../utils'


function* fetchCategories() {
  const api = ApiConst.category.all()
  const categories = yield call(request.call, api.url)
  yield put({
    type: 'FETCH_CATEGORIES_SUCCEEDED',
    categories
  })
}

function* watchFetchCategories() {
  yield takeLatest('FETCH_CATEGORIES', fetchCategories)
}

export {
  watchFetchCategories,
}
