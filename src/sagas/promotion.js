import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from '../configs'
import { request } from '../utils'


function* fetchPromotions() {
  const api = ApiConst.promotion.all()
  const response = yield call(request.call, api.url)
  // console.log('response', response)
  const { result } = response
  yield put({
    type: 'FETCH_PROMOTIONS_SUCCEEDED',
    promotions: result
  })
}

function* watchFetchPromotions() {
  yield takeLatest('FETCH_PROMOTIONS', fetchPromotions)
}

export {
  watchFetchPromotions,
}
