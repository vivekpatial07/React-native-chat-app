import * as actionTypes from './actionTypes'

const initialState = {
  signInLoader: false,
  redirectToHome: false,
  allUsers: [],
  fetchUsersLoader: false,
  allChats: [],
  fetchChatsLoader: false,
  chatData: null,
  userMessages: [],
  ongoingChats: []
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
    case actionTypes.GET_CHATS_INIT:
      return {
        ...state,
        fetchChatsLoader: true
      }
    case actionTypes.GET_CHATS_FAIL:
      return {
        ...state,
        fetchChatsLoader: false
      }
    case actionTypes.GET_CHATS_INIT:
      return {
        ...state,
        fetchChatsLoader: false,
        allChats: action.payload
      }
    case actionTypes.GET_PRIVATE_CHAT_SUCCESS:
      return {
        ...state,
        chatData: action.payload
      }
    case actionTypes.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        userMessages: action.payload
      }
    case actionTypes.GET_ONGOING_CHATS_SUCCESS:
      return {
        ...state,
        ongoingChats: action.payload
      }
    default:
      return state
  }
}
export default reducer