import axios from "axios"

const instance = axios.create({
  baseURL: 'http://192.168.0.130:7000'
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