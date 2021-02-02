import axios from 'axios'

import { API_URL } from '../config'

const save = async (order) => {
  const { data, status } = await axios.post(`${API_URL}/public/orders`, order)
  return [200, 201].includes(status) && data ? data : null
}

export default save
