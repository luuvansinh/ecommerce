/**
 * Format number
 * @param {Number} value value for format
 */
const number = (value) => {
  if (!value) {
    return '0'
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default {
  number,
}