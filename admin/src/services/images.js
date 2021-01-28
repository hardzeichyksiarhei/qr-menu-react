import axios from 'axios'

import { API_URL } from '../config'

const getAll = async () => {
  const { data, status } = await axios.get(`${API_URL}/images`)
  return status === 200 && data ? data : []
}

const upload = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const { data, status } = await axios.post(`${API_URL}/images/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return status === 200 && data ? data : null
}

const deleteById = async (imageId) => {
  const { data, status } = await axios.delete(`${API_URL}/images/${imageId}`)
  return status === 200 ? data : null
}

export default {
  getAll,
  upload,
  deleteById,
}
