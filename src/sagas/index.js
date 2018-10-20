import { call, all } from 'redux-saga/effects'
import { watchFetchProducts } from './product'
import { watchFetchPromotions } from './promotion'
import { watchFetchCategories } from './category'

export default function* rootSaga() {
  yield all([
    call(watchFetchProducts),
    call(watchFetchPromotions),
    call(watchFetchCategories),
  ])
}
