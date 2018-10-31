import { call, all } from 'redux-saga/effects'
import { watchFetchUser } from './profile';
import { watchFetchProducts, watchFetchProductDetail } from './product'
import { watchFetchPromotions } from './promotion'
import { watchFetchCategories } from './category'
import { watchFetchProductsOrder} from './order-product'
import { watchFetchCart, watchAddToCart, watchChangeQuantity, watchRemoveItem } from './cart'
import { watchLogin } from './common'

export default function* rootSaga() {
  yield all([
    call(watchFetchProducts),
    call(watchFetchUser),
    call(watchFetchPromotions),
    call(watchFetchCategories),
    call(watchFetchCart),
    call(watchAddToCart),
    call(watchRemoveItem),
    call(watchChangeQuantity),
    call(watchFetchProductDetail),
    call(watchFetchProductsOrder),
    call(watchLogin),
  ])
}
