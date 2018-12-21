import { put, takeLatest, call } from 'redux-saga/effects'
import { AsyncStorage, Alert } from 'react-native'
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
  const apiInfo = ApiConst.common.me()
  const data = yield call(request.call, apiInfo.url)
  yield put({
    type: 'LOGIN_SUCCEEDED',
    payload: {
      user: {
        ...data.result.user_infor,
        email: data.result.email,
      },
      isLoggedIn: true,
    }
  })
  yield call(navigation.navigate, 'Home')
}

function* init() {
  const token = yield AsyncStorage.getItem(AppConst.asyncStorage.authKey)
  if (token) {
    try {
      const api = ApiConst.common.me()
      const response = yield call(request.call, api.url)
      const { result } = response
      yield put({
        type: 'LOGIN_SUCCEEDED',
        payload: {
          user: {
            ...result.user_infor,
            email: result.email,
          },
          isLoggedIn: true,
        }
      })
    } catch (error) {
      // yield AsyncStorage.removeItem(AppConst.asyncStorage.authKey)
    }
  }
}

function* logout() {
  yield AsyncStorage.removeItem(AppConst.asyncStorage.authKey)
  yield put({
    type: 'LOGIN_SUCCEEDED',
    payload: {
      user: null,
      isLoggedIn: false,
    }
  })
}

function* register({ payload, navigation }) {
  const api = ApiConst.common.register()
  const response = yield call(request.call, api.url, {
    method: api.method,
    body: payload,
  })
  console.log({ response })
  const { result, error } = response
  if (error) {
    // return Alert.alert('Oops', error[Object.keys(error)[0]])
    console.log({ error })
    return null
  }
  const { token, user } = result
  yield AsyncStorage.setItem(AppConst.asyncStorage.authKey, token)
  yield put({
    type: 'LOGIN_SUCCEEDED',
    payload: {
      isLoggedIn: !!token,
      user: {
        ...user.user_infor,
        email: user.email,
      },
    }
  })
  yield call(navigation.navigate, 'Home')
}

/**
 * ******************* WATCHER ******************
 */

function* watchInit() {
  yield takeLatest('INIT', init)
}

function* watchLogin() {
  yield takeLatest('LOGIN', login)
}

function* watchLogout() {
  yield takeLatest('LOGOUT', logout)
}

function* watchRegister() {
  yield takeLatest('REGISTER', register)
}

export {
  watchLogin,
  watchInit,
  watchLogout,
  watchRegister,
}
