import {USER} from './type'


const fetchUser = () => ({
  type: USER
})

const fetchSucessUser = user => ({
  type: FETCH_SUCCEEDED,
  user
})

const fetchFailedUser = error => ({
  type: FETCH_FAILED,
  error
})

export {
  fetchUser,
  fetchSucessUser,
  fetchFailedUser,
}


