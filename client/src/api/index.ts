import axios from 'axios'
import { API_BASE_URL } from 'src/config'

export const api = axios.create({
  baseURL: API_BASE_URL,
})

api.defaults.headers.common['Content-Type'] = 'application/json'

export const fetchTest = async () => {
  const response = await api.get('/')
  return response.data
}
