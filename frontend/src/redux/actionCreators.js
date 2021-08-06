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

export const getChatsInit = (data) => {
  return {
    type: actionTypes.GET_CHATS_INIT,
    payload: data
  }
}

export const getChatsFail = (data) => {
  return {
    type: actionTypes.GET_CHATS_FAIL,
    payload: data
  }
}

export const getChatsSuccess = (data) => {
  return {
    type: actionTypes.GET_CHATS_SUCCESS,
    payload: data
  }
}

export const getPrivateChatInit = (data) => ({
    type: actionTypes.GET_PRIVATE_CHAT_INITIATE,
    payload: data
})

export const getPrivateChatFail = (data) => ({
  type: actionTypes.GET_PRIVATE_CHAT_FAIL,
  payload: data
})

export const getPrivateChatSuccess = (data) => ({
  type: actionTypes.GET_PRIVATE_CHAT_SUCCESS,
  payload: data
})

export const getMessagesInit = (data) => ({
  type: actionTypes.GET_MESSAGES_INIT,
  payload: data
})

export const getMessagesSuccess = (data) => ({
  type: actionTypes.GET_MESSAGES_SUCCESS,
  payload: data
})

export const getMessagesFail = (data) => ({
  type: actionTypes.GET_MESSAGES_FAIL,
  payload: data
})
