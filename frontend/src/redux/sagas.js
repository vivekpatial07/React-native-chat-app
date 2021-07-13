import instance from '../utils/axiosInstance'

export function* signInSaga(data) {
  try{
    const response = yield instance.post('/signin', data.payload) 
  } catch(error) {
    console.log(error.message)
    console.log(error.response.data)
  }
}