import { FETCH_FAILED } from '../actions/type'
import { FETCH_USER } from '../actions/profile'

const userReducers = (user = [], action) => {
  console.log('profile')
  console.log('ACTION', action)
  switch (action.type) {
    case FETCH_USER: 
      return action.user
    case FETCH_FAILED: 
      return []
    default:
      return user
  }
}

export default userReducers