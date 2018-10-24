
const categories = (categories = [], action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_SUCCEEDED': 
      return action.categories
    case 'FETCH_FAILED': 
      return []
    default:
      return categories
  }
}

export default categories