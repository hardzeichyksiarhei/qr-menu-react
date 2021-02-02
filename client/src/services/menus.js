import axios from 'axios'

import { API_URL } from '../config'

const getAllByUserId = async (userId) => {
  const { data, status } = await axios.get(`${API_URL}/public/menus?userId=${userId}`)
  return status === 200 && data ? data : null
}

export default { getAllByUserId }
