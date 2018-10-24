import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from '../configs'
import { request } from '../utils'


function* fetchPromotions() {
  const api = ApiConst.promotion.all()
  const promotions = yield call(request.call, api.url)
  yield put({
    type: 'FETCH_PROMOTIONS_SUCCEEDED',
    promotions
  })
}

function* watchFetchPromotions() {
  yield takeLatest('FETCH_PROMOTIONS', fetchPromotions)
}

export {
  watchFetchPromotions,
}
