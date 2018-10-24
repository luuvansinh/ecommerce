import { combineReducers } from 'redux'
import products from './product'
import promotions from './promotion'
import categories from './category'

const rootReducer = combineReducers({
  products,
  promotions,
  categories,
})

export default rootReducer
