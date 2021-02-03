import axios from 'axios'

import { API_URL } from '../config'

const getAll = async () => {
  const { data, status } = await axios.get(`${API_URL}/orders`)
  return status === 200 && data ? data : []
}

const getById = async ({ orderId }) => {
  const { data, status } = await axios.get(`${API_URL}/orders/${orderId}`)
  return status === 200 && data ? data : null
}

const getOrdersForChart = async () => {
  const { data, status } = await axios.get(`${API_URL}/orders/chart`)
  return status === 200 && data ? data : []
}

const deleteById = async (orderId) => {
  const { data, status } = await axios.delete(`${API_URL}/orders/${orderId}`)
  return status === 200 ? data : null
}

export default {
  getAll,
  getById,
  getOrdersForChart,
  deleteById,
}
