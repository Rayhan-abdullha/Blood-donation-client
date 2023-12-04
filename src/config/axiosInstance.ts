import axios from 'axios'
export const ApiInstance = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    headers: {'X-Custom-Header': 'foobar'}
  });