import { combineReducers } from 'redux'
import products from './product'
import promotions from './promotion'
import categories from './category'
import cart from './cart'

const rootReducer = combineReducers({
  products,
  promotions,
  categories,
  cart,
})

export default rootReducer
