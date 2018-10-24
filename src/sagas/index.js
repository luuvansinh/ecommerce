import { call, all } from 'redux-saga/effects'
import { watchFetchProducts } from './product'
import { watchFetchUser } from './profile';
import { watchFetchPromotions } from './promotion'
import { watchFetchCategories } from './category'

export default function* rootSaga() {
  yield all([
    call(watchFetchProducts),
    call(watchFetchUser),
    call(watchFetchPromotions),
    call(watchFetchCategories),
  ])
}
