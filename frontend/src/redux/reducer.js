import * as actionTypes from './actionTypes'

const initialState = {
  signInLoader: false,
  redirectToHome: false,
  allUsers: [],
  fetchUsersLoader: false
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.SIGN_IN_INIT:
      return {
        ...state,
        signInLoader: true
      }
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInLoader: false,
        redirectToHome: true
      }
    case actionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        signInLoader: false
      }
    case actionTypes.FETCH_USERS_INIT:
      return {
        ...state,
        fetchUsersLoader: true
      }
    case actionTypes.FETCH_USERS_FAIL:
      return {
        ...state,
        fetchUsersLoader: false
      }
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        fetchUsersLoader: false
      }
    default:
      return state
  }
}
export default reducer