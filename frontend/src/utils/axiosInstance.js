import axios from "axios"

const instance = axios.create({
  baseURL: 'http://48c85550d6d2.ngrok.io'
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