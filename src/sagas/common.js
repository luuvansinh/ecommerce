import { put, takeLatest, call } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import { Modal } from 'antd-mobile-rn'
import { ApiConst, AppConst } from '../configs'
import { request } from '../utils'


function* login({ payload, navigation }) {
  const api = ApiConst.common.login()
  const response = yield call(request.call, api.url, {
    method: api.method,
    body: payload,
  })
  if (response.error) {
    return Modal.alert('Thông báo!', response.error, [
      { text: 'OK' }
    ])
  }
  const { result: { token, user } } = response
  yield AsyncStorage.setItem(AppConst.asyncStorage.authKey, token)
  yield put({
    type: 'LOGIN_SUCCEEDED',
    payload: {
      user,
      isLoggedIn: !!token,
    }
  })
  yield call(navigation.navigate, 'Profile')
}

function* watchLogin() {
  yield takeLatest('LOGIN', login)
}

export {
  watchLogin,
}
