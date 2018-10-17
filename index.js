/** @format */

import React from 'react'
import {AppRegistry} from 'react-native'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleWare from 'redux-saga'
import {name as appName} from './app.json'

import rootReducer from './src/reducers'
import rootSaga from './src/sagas'

const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
sagaMiddleWare.run(rootSaga)

AppRegistry.registerComponent(appName, () => RootApp)
