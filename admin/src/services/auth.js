import axios from 'axios'
import { API_URL } from '../config'

export const login = async (email, password) => {
  const { status } = await axios.post(`${API_URL}/auth/login`, { email, password })

  return status === 200
}

export const registration = async (email, password) => {
  const { status } = await axios.post(`${API_URL}/auth/register`, { email, password })

  return status === 200
}
