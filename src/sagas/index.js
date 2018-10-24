import { call, all } from 'redux-saga/effects'
import { watchFetchProducts } from './product'
import { watchFetchUser } from './profile';

export default function* rootSaga() {
  yield all([
    call(watchFetchProducts),
    call(watchFetchUser)
  ])
}