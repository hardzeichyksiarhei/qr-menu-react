import axios from 'axios'

import { API_URL } from '../config'

const getAllImages = async () => {
  const { data, status } = await axios.get(`${API_URL}/images`)
  return status === 200 && data ? data : []
}

export default {
  getAllImages,
}
