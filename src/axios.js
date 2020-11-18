import axios from 'axios'

const instance = axios.create({
  //!cloud function url *axios has base url
  //baseURL: 'http://localhost:5001/clone-b17e6/us-central1/api',

  baseURL: 'https://us-central1-clone-b17e6.cloudfunctions.net/api',
})

export default instance
