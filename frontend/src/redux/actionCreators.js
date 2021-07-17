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

export const fetchUsersInit = () => {
  return{
    type: actionTypes.FETCH_USERS_INIT
  }
}

export const fetchUsersFail = (data) => {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
    payload: data
  }
}

export const fetchUsersSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    payload: data
  }
}