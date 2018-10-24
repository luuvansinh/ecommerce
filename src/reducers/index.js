import { combineReducers } from 'redux'
import productReducers from './product'
import userReducers from './profile'

const rootReducer = combineReducers({
  productReducers,
  userReducers
})

export default rootReducer
