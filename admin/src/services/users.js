import axios from 'axios'
import { API_URL } from '../config'

// eslint-disable-next-line import/prefer-default-export
export const getAuthUser = async () => {
  const { data, status } = await axios.get(`${API_URL}/users/current`)

  return status === 200 && data ? data : null
}
