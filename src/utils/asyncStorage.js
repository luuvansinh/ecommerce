import { AsyncStorage } from 'react-native'
import { AppConst } from '../configs'

const updateCart = async (cart = []) => {
  await AsyncStorage.setItem(AppConst.asyncStorage.cartKey, JSON.stringify(cart))
}

const getCart = async () => {
  const cart = await AsyncStorage.getItem(AppConst.asyncStorage.cartKey)
  return cart ? JSON.parse(cart) : []
}

export default {
  getCart,
  updateCart,
}
