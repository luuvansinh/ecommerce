export default {
  asyncStorage: {
    authKey: 'token',
    cartKey: 'cart',
  },
  format: {
    date: 'DD/MM/YYYY, HH:mm',
    dateWithNoHour: 'DD/MM/YYYY',
    dateWithDayMonthOnly: 'DD/MM',
    dateWithHour: 'H',
    dateWithMinute: 'm',
    month: 'MM/YYYY',
    inputNumberFormatter: /\B(?=(\d{3})+(?!\d))/g,
    inputNumberParser: /\$\s?|(,*)/g,
  },

}
