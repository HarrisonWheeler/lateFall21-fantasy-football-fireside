import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const footballApi = Axios.create({
  baseURL: 'https://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json',
  timeout: 8000
})
