import * as actionTypes from './actionTypes'

export const signInInit = (data) => {
  return {
    type: actionTypes.SIGN_IN_INIT,
    payload: data
  }
}

export const signInFail = (data) => {
  return {
    type: actionTypes.SIGN_IN_FAIL,
    payload: data
  }
}

export const signInSuccess = (data) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: data
  }
}