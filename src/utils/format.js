import moment from 'moment'
import { AppConst } from '../configs';

/**
 * Format number
 * @param {Number} value value for format
 */
const number = (value) => {
  if (!value) {
    return '0'
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

/**
 * Format ISODate to date and time
 *
 * @param {Date} value date need to be format
 */
const date = (value) => {
  if (!value) {
    return ''
  }

  return moment(value)
    .format(AppConst.format.date)
}

export default {
  number,
  date,
}