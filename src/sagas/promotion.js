import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from '../configs'
import { request } from '../utils'


function* fetchPromotions() {
  const api = ApiConst.promotion.all()
  const response = yield call(request.call, api.url)
  // const { data } = response.result
  yield put({
    type: 'FETCH_PROMOTIONS_SUCCEEDED',
    promotions: response
  })
}

function* watchFetchPromotions() {
  yield takeLatest('FETCH_PROMOTIONS', fetchPromotions)
}

export {
  watchFetchPromotions,
}
