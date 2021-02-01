import axios from 'axios'

import { API_URL } from '../config'

const getById = async (menuId) => {
  const { data, status } = await axios.get(`${API_URL}/public/menus?userId=${menuId}`)
  return status === 200 && data ? data : null
}

export default {
  getById,
}
