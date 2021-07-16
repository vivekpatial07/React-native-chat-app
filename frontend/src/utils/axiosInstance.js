import axios from "axios"

const instance = axios.create({
  baseURL: 'http://31556f2dfb43.ngrok.io'
})

export default instance

/*

export const setAuthToken = token => {
 if (token) {
 //applying token
 instance.defaults.headers.common['Authorization'] = token;
 } else {
 //deleting the token from header
 delete instance.defaults.headers.common['Authorization'];
 }
}

*/