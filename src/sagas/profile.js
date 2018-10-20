import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_FAILED, FETCH_SUCCEEDED, FETCH_USER } from '../actions/type'
import api from './api'

// same controller call
function* fetchUser() {
  try {
    const user = yield api.getUser()
    yield put({
      type: FETCH_SUCCEEDED,
      user
    })
  } catch (error) {
    yield put({
      type: FETCH_FAILED,
      error
    })
  }
}

function* watchFetchUser() {
  yield takeLatest(FETCH_USER, fetchUser)
}

export {
  watchFetchUser,
}
