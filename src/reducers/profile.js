const userReducers = (user = [], action) => {
  console.log('profile')
  console.log('ACTION', action)
  switch (action.type) {
    case 'FETCH_USER': 
      return action.user
    case 'FETCH_FAILED': 
      return []
    default:
      return user
  }
}

export default userReducers