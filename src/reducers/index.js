import { combineReducers } from 'redux'
import { products, product } from './product'
import promotions from './promotion'
import categories from './category'
import cart from './cart'
import profile from './profile'
import order_product from './order_product'

const rootReducer = combineReducers({
  products,
  product,
  promotions,
  categories,
  cart,
  user: profile,
  order_products: order_product,
})

export default rootReducer
