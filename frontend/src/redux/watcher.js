import * as actionTypes from './actionTypes'
import { takeLatest } from 'redux-saga/effects'
import { signInSaga } from './sagas'

function* watcher() {
  yield takeLatest(actionTypes.SIGN_IN_INIT, signInSaga)
}


export default watcher