import instance from '../utils/axiosInstance'
import { put } from 'redux-saga/effects'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { signInSuccess, signInFail } from './actionCreators'

export function* signInSaga(data) {
  try{
    const response = yield instance.post('/signin', data.payload)
    yield AsyncStorage.setItem('userInfo', JSON.stringify(response.data))
    const user = yield (AsyncStorage.getItem('userInfo'))
    yield put(signInSuccess(JSON.parse(user)))
  } catch(error) {
    console.log(error.message)
    yield put(signInFail(error.respones.data))
  }
}