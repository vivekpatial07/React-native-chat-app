import * as actionTypes from './actionTypes'
import { takeLatest } from 'redux-saga/effects'
import {
  signInSaga,
  fetchUsersSaga
} from './sagas'

function* watcher() {
  yield takeLatest(actionTypes.SIGN_IN_INIT, signInSaga)
  yield takeLatest(actionTypes.FETCH_USERS_INIT, fetchUsersSaga)
}


export default watcher