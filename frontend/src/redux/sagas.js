import instance from '../utils/axiosInstance'
import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  signInSuccess,
  signInFail,
  fetchUsersSuccess,
  getChatsSuccess,
  getPrivateChatSuccess,
  getMessagesSuccess
} from './actionCreators'

export function* signInSaga(data) {
  try{
    const response = yield instance.post('/signin', data.payload)
    yield AsyncStorage.setItem('userInfo', JSON.stringify(response.data))
    const user = yield (AsyncStorage.getItem('userInfo'))
    yield put(signInSuccess(JSON.parse(user)))
  } catch(error) {
    console.log(error.message)
    yield put(signInFail(error.response.data))
  }
}

export function* fetchUsersSaga() {
  try{
    const response = yield instance.get('/fetchUsers')
    yield put(fetchUsersSuccess(response.data))
  } catch(error) {
    console.log(error)
  }
}

export function* getAllChatSaga(data) {
  try {
    const response = yield instance.get('/getChats')
    yield put(getChatsSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

export function* getPrivateChatSaga ({ payload }) {
  try {
    const response = yield instance.post('/getPrivateChat', payload)
    yield put(getPrivateChatSuccess((response.data[0])))
  } catch (error) {
    console.log(error.message)
  }
}

export function* getMessagesSaga ({ payload }) {
  try {
    //send key value
    const response = yield instance.post('/getMessages', {chatId: payload})
    yield put(getMessagesSuccess(response.data))
  } catch (error) {
    console.log(error.message)
  }
}