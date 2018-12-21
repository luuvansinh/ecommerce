import { AsyncStorage } from 'react-native'
import { AppConst, ApiConst } from '../configs'

const parseJSON = (response) => {
  const data = JSON.parse(response._bodyInit)
  return {
    ...data,
    success: response.status < 400,
  }
}

const serializeObject = (obj) => {
  const str = []
  for (const p in obj) {
    if (typeof obj[p] === 'object' && obj[p].length) {
      for (const i in obj[p]) {
        if (Object.prototype.hasOwnProperty.call(obj[p], i)) {
          str.push(`${encodeURIComponent(p)}[]=${encodeURIComponent(obj[p][i])}`)
        }
      }
    } else if (typeof obj[p] === 'object') {
      for (const k in obj[p]) {
        if (Object.prototype.hasOwnProperty.call(obj[p], k)) {
          str.push(`${encodeURIComponent(p)}[${k}]=${encodeURIComponent(obj[p][k])}`)
        }
      }
    } else {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`)
    }
  }
  return str.join('&')
}

const processOptions = async (options) => {
  if (!options.headers) {
    options.headers = {}
    if (!options.file) {
      options.headers = {
        'Content-Type': 'application/json'
      }
    }
  }

  // Proccess send data
  if (options.method === ApiConst.methods.get) {
    options.query = serializeObject(options.body)
    options.body = undefined
    delete options.body
  } else {
    options.body = JSON.stringify(options.body)
  }

  if (options.file) {
    options.body = new FormData()
    options.body.append('file', options.file)
  }

  const token = await AsyncStorage.getItem(AppConst.asyncStorage.authKey)
  
  if (token) {
    options.headers.Authorization = `Bearer ${token}`
  }

  return options
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const call = async (url, options = {}) => {
  url = ApiConst.endPoint + url
  if (!options.method) {
    options.method = ApiConst.methods.get
  }
  options = await processOptions(options)
  if (options.query) {
    url += `?${options.query}`
  }

  return fetch(url, options)
    .then(parseJSON)
    // .then(data => ({ data }))
    .catch(err => ({ err }))
}

const callServer = async (url, options = {}) => {
  url = ApiConst.endPointDev + url
  if (!options.method) {
    options.method = ApiConst.methods.get
  }
  options = await processOptions(options)
  if (options.query) {
    url += `?${options.query}`
  }
  
  return fetch(url, options)
    .then(parseJSON)
    .catch(err => ({ err }))
}

export default {
  call,
  callServer,
}
