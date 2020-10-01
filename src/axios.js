import axios from 'axios';

const instance = axios.create({
  //!cloud function url *axios has base url
  baseURL: 'http://localhost:5001/clone-b17e6/us-central1/api',
});

export default instance;
