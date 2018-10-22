import { call, all } from 'redux-saga/effects'
import { watchFetchProducts } from './product'
import { watchFetchPromotions } from './promotion'
import { watchFetchCategories } from './category'
import { watchFetchCart, watchAddToCart, watchChangeQuantity, watchRemoveItem } from './cart'

export default function* rootSaga() {
  yield all([
    call(watchFetchProducts),
    call(watchFetchPromotions),
    call(watchFetchCategories),
    call(watchFetchCart),
    call(watchAddToCart),
    call(watchRemoveItem),
    call(watchChangeQuantity),
  ])
}
