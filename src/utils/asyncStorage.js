import { AsyncStorage } from 'react-native'
import { AppConst } from '../configs'

const updateCart = async (cart = []) => {
  await AsyncStorage.setItem(AppConst.asyncStorage.cartKey, JSON.stringify(cart))
}

const getCart = async () => {
  const cart = await AsyncStorage.getItem(AppConst.asyncStorage.cartKey)
  return cart ? JSON.parse(cart) : []
}

// const setItem = async (token) => {
//   await AsyncStorage.setItem(AppConst.asyncStorage.authKey, token)
// }

// const removeAuthKey = async () => {
//   await AsyncStorage.removeItem(AppConst.asyncStorage.authKey)
// }

export default {
  getCart,
  updateCart,
  // setAuthKey,
  // removeAuthKey,
}
