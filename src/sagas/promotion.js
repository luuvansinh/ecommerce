import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from '../configs'
import { request } from '../utils'

/**
 * ***************************
 * FUNCTION
 * ***************************
 */

/**
 * Fetch promotions in home screen
 */
function* fetchPromotions() {
  const api = ApiConst.promotion.all()
  const response = yield call(request.call, api.url)
  const { result } = response
  yield put({
    type: 'FETCH_PROMOTIONS_SUCCEEDED',
    promotions: result
  })
}

/**
 * Fetch promotion detail
 */
function* fetchPromotion({ promotionId }) {
  const api = ApiConst.promotion.show(promotionId)
  const response = yield call(request.call, api.url)
  const { result } = response
  result.products = result.products.map((product => {
    product.images = product.images.map(item => item.path)
    return product
  }))
  yield put({
    type: 'FETCH_PROMOTION_SUCCEEDED',
    promotion: result,
  })
}


/**
 * ***************************
 * WATCHER
 * ***************************
 */

function* watchFetchPromotions() {
  yield takeLatest('FETCH_PROMOTIONS', fetchPromotions)
}

function* watchFetchPromotion() {
  yield takeLatest('FETCH_PROMOTION', fetchPromotion)
}

export {
  watchFetchPromotions,
  watchFetchPromotion,
}
