import { combineReducers } from 'redux'
import { products, product } from './product'
import promotions from './promotion'
import categories from './category'
import cart from './cart'
import profile from './profile'

const rootReducer = combineReducers({
  products,
  product,
  promotions,
  categories,
  cart,
  user: profile,
})

export default rootReducer
