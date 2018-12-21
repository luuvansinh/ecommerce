
const promotions = (promotions = [], action) => {
  switch (action.type) {
    case 'FETCH_PROMOTIONS_SUCCEEDED':
      return action.promotions
    default:
      return promotions
  }
}

const promotion = (init = null, { type, promotion }) => {
  switch (type) {
    case 'FETCH_PROMOTION_SUCCEEDED':
      console.log(promotion)
      return promotion
    default:
      return init
  }
}

export {
  promotions,
  promotion,
}
