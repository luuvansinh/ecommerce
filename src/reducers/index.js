import { combineReducers } from 'redux'
import { products, product } from './product'
import { promotions, promotion } from './promotion'
import { categories, category } from './category'
import cart from './cart'
import { orders, user } from './profile'
import order_product from './order_product'
import app from './common'
import { orderInfo } from './checkout'

const rootReducer = combineReducers({
  products,
  product,
  promotions,
  categories,
  category,
  cart,
  user,
  order_products: order_product,
  app,
  promotion,
  orderInfo,
  orders,
})

export default rootReducer
