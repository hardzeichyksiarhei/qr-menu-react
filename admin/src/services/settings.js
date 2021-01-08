import axios from 'axios'

import { API_URL } from '../config'

const getSettings = async () =>
  //   const { data, status } = await axios.get(`${API_URL}/settings`)
  //   return status === 200 && data ? data : null
  new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        regionSettings: {
          country: 'Belarus',
          currency: 'BLR',
          time: 24,
        },
        supplier: {
          restaurantName: 'Random restaurant',
          companyName: 'Random company name',
          phone: '+375 25 555-55-55',
          website: 'link',
        },
      })
    }, 2000),
  )

const save = async (settings) => {
  const { data, status } = await axios.post(`${API_URL}/settings`, settings)
  return status === 200 && data ? data : null
}

export default {
  getSettings,
  save,
}
