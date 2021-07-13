import * as actionTypes from './actionTypes'

const initialState = {
  signInLoader: false
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
        signInLoader: false
      }
    case actionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        signInLoader: false
      }
  }
}
export default reducer