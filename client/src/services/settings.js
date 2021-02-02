import axios from 'axios'

import { API_URL } from '../config'

const getFieldsSettings = async (userId, fields = []) => {
  const { data, status } = await axios.post(`${API_URL}/public/settings?userId=${userId}`, {
    fields,
  })
  return status === 200 && data ? data : null
}

export default { getFieldsSettings }
