import { call, all } from 'redux-saga/effects'
import { watchFetchUser, watchFetchOrders } from './profile';
import { watchFetchProducts, watchFetchProductDetail, watchComment } from './product'
import { watchFetchPromotions, watchFetchPromotion } from './promotion'
import { watchFetchCategories, watchFetchCategory } from './category'
import { watchFetchProductsOrder} from './order-product'
import { watchFetchCart, watchAddToCart, watchChangeQuantity, watchRemoveItem, watchClear } from './cart'
import { watchLogin, watchInit, watchLogout, watchRegister } from './common'
import { watchCreateOrder } from './checkout'

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
    call(watchFetchCategory),
    call(watchFetchPromotion),
    call(watchInit),
    call(watchCreateOrder),
    call(watchClear),
    call(watchLogout),
    call(watchComment),
    call(watchRegister),
    call(watchFetchOrders),
  ])
}
