import { takeLatest, call, select, put } from 'redux-saga/effects'
import { Alert } from 'react-native'
import { ApiConst } from '../configs'
import { request, storage } from '../utils'

/**
 * *************************************
 *               SAGA
 * *************************************
 */

function* createOrder({ payload, navigation }) {
  const { isLoggedIn } = yield select(state => state.app)
  const api = isLoggedIn ? ApiConst.order_product.create() : ApiConst.order_product.orderNoLogin()
  const products = yield select(state => state.cart)
  const response = yield call(request.call, api.url, {
    method: api.method,
    body: {
      ...payload,
      products,
    },
  })
  const { success, error } = response
  console.log({ response })
  if (!success || error) {
    // Alert.alert('op', JSON.stringify(response))
    return Alert.alert('Oops', error || 'Lỗi hệ thống, vui lòng thử lại')
  }
  Alert.alert('Thành công', 'Đơn hàng của bạn đang được hệ thông xử lý', [
    {text: 'OK'},
  ],)
  yield put({
    type: 'FETCH_CART_SUCCEEDED',
    cart: []
  })
  navigation.navigate('Home')
}


/**
 * *************************************
 *               WATCHER
 * *************************************
 */

function* watchCreateOrder() {
  yield takeLatest('CREATE_ORDER', createOrder)
}


export {
  watchCreateOrder,
}
