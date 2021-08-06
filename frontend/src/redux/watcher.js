import * as actionTypes from './actionTypes'
import { takeLatest } from 'redux-saga/effects'
import {
  signInSaga,
  fetchUsersSaga,
  getAllChatSaga,
  getPrivateChatSaga,
  getMessagesSaga
} from './sagas'

function* watcher() {
  yield takeLatest(actionTypes.SIGN_IN_INIT, signInSaga)
  yield takeLatest(actionTypes.FETCH_USERS_INIT, fetchUsersSaga)
  yield takeLatest(actionTypes.GET_CHATS_INIT, getAllChatSaga)
  yield takeLatest(actionTypes.GET_PRIVATE_CHAT_INITIATE, getPrivateChatSaga)
  yield takeLatest(actionTypes.GET_MESSAGES_INIT, getMessagesSaga)
}


export default watcher