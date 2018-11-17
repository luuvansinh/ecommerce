
const promotions = (promotions = [], action) => {
  switch (action.type) {
    case 'FETCH_PROMOTIONS_SUCCEEDED': 
      return action.promotions
    default:
      return promotions
  }
}

const promotion = (promotion = null, { type, payload }) => {
  switch (type) {
    case 'FETCH_PROMOTION_SUCCEEDED':
      return payload
    default:
      return promotion
  }
}

export {
  promotions,
  promotion,
}