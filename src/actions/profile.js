import {FETCH_USER, FETCH_SUCCEEDED, FETCH_FAILED} from './type'


const fetchUser = () => ({
  type: FETCH_USER
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


