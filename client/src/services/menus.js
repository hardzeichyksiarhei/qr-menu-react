import axios from 'axios'

import { API_URL } from '../config'

const getAllByUserId = async (userId) => {
  const { data, status } = await axios.get(`${API_URL}/public/menus?userId=${userId}`)
  return status === 200 && data ? data : null
}

const updateDishRating = async (ids, rating) => {
  const { status } = await axios.patch(`${API_URL}/public/menus/rating`, { ids, rating })
  return status === 200
}

export default { getAllByUserId, updateDishRating }
