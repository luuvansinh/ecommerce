import { put, takeLatest, call } from 'redux-saga/effects'
import { ApiConst } from './../configs'
import { request } from '../utils'
// same controller call
function* fetchUser() {
  const api = ApiConst.user.detail()
  const user = yield call(request.call, api.url)
  yield put({
    type: 'FETCH_USER_SUCCEEDED',
    user
  })
}

function* watchFetchUser() {
  yield takeLatest('FETCH_USER', fetchUser)
}

export {
  watchFetchUser,
}
