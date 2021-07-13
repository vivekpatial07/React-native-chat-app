import axios from "axios"

const instance = axios.create({
  baseURL: 'http://082a7b47b830.ngrok.io'
})

export default instance