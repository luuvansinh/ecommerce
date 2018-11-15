import { combineReducers } from 'redux'
import { products, product } from './product'
import promotions from './promotion'
import { categories, category } from './category'
import cart from './cart'
import profile from './profile'
import order_product from './order_product'
import app from './common'

const rootReducer = combineReducers({
  products,
  product,
  promotions,
  categories,
  category,
  cart,
  user: profile,
  order_products: order_product,
  app,
})

export default rootReducer
