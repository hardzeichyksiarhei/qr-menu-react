import axios from 'axios'

import { API_URL } from '../config'

const getSettings = async () => {
  const { data, status } = await axios.get(`${API_URL}/settings`)
  return status === 200 && data ? data : null
}

const getFieldsSettings = async (fields = []) => {
  const { data, status } = await axios.post(`${API_URL}/settings`, { fields })
  return status === 200 && data ? data : null
}

const saveSettings = async (settings) => {
  const { data, status } = await axios.patch(`${API_URL}/settings`, settings)
  return status === 200 && data ? data : null
}

export default {
  getSettings,
  getFieldsSettings,
  saveSettings,
}
