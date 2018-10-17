import { call } from 'redux-saga/effects'
import { watchFetchProducts } from './product'

export default function* rootSaga() {
  yield call(watchFetchProducts)
}
