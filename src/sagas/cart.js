import { put, takeLatest, call } from 'redux-saga/effects'
import { storage } from '../utils'

/**
 ******** FUNCTION ************
 */

function* fetchCart() {
  const cart = yield call(storage.getCart)
  yield put({
    type: 'FETCH_CART_SUCCEEDED',
    cart
  })
}

function* addToCart({ product }) {
  let cart = yield call(storage.getCart)

  const index = cart.findIndex(item => item.id === product.id)
  if (index > -1) {
    cart = cart.map((item) => {
      return item.id === product.id ? { ...product, quantity: item.quantity + 1 } : item
    })
  } else {
    cart.push({ ...product, quantity: 1 })
  }
  yield call(updateCart, cart)
}

function* updateCart(cart = []) {
  yield call(storage.updateCart, cart)
  const newCart = yield call(fetchCart)
  yield put({
    type: 'FETCH_CART_SUCCESSED',
    cart: newCart,
  })
}

function* changeQuantity({ productId, value }) {
  let cart = yield call(storage.getCart)
  cart = cart.map((item) => {
    item = item.id !== productId ? item :
      (item.quantity + value > 0) ? { ...item, quantity: item.quantity + value } : item
    return item
  })
  yield call(updateCart, cart)
}

function* removeItem({ productId }) {
  let cart = yield call(storage.getCart)
  cart = cart.filter(item => item.id !== productId)
  yield call(updateCart, cart)
}

function* clearCart() {
  yield call(storage.updateCart([]))
}


/**
 ************ WATCHER**********
 */


function* watchFetchCart() {
  yield takeLatest('FETCH_CART', fetchCart)
}

function* watchAddToCart() {
  yield takeLatest('ADD_TO_CART', addToCart)
}

function* watchChangeQuantity() {
  yield takeLatest('CHANGE_QUANTITY', changeQuantity)
}

function* watchRemoveItem() {
  yield takeLatest('REMOVE_ITEM', removeItem)
}

function* watchClear() {
  yield takeLatest('CLEAR_ALL', clearCart)
}

export {
  watchFetchCart,
  watchAddToCart,
  watchChangeQuantity,
  watchRemoveItem,
  watchClear,
}
