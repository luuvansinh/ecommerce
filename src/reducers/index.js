import { combineReducers } from 'redux'
import { products, product } from './product'
import promotions from './promotion'
import categories from './category'
import cart from './cart'

const rootReducer = combineReducers({
  products,
  product,
  promotions,
  categories,
  cart,
})

export default rootReducer
