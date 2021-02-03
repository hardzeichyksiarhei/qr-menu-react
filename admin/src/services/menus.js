import axios from 'axios'

import { API_URL } from '../config'

const getDefaultMenu = async () => ({ title: 'New menu' })

const getAll = async () => {
  const { data, status } = await axios.get(`${API_URL}/menus`)
  return status === 200 && data ? data : []
}

const getById = async ({ menuId }) => {
  const { data, status } = await axios.get(`${API_URL}/menus/${menuId}`)
  return status === 200 && data ? data : null
}

const save = async (menu) => {
  const { data, status } = await axios.post(`${API_URL}/menus`, { menu })
  return [200, 201].includes(status) && data ? data : null
}

const duplicate = async ({ _id, id, createdAt, ...menu }) => {
  const duplicateMenu = {
    ...menu,
    title: `Copy of ${menu.title}`,
    isPublished: false,
    isEnabledToOrder: false,
  }

  const { data, status } = await axios.post(`${API_URL}/menus`, { menu: duplicateMenu })

  const duplicatedMenu = {
    ...duplicateMenu,
    id: data.menuId,
  }

  return [200, 201].includes(status) && duplicatedMenu ? duplicatedMenu : null
}

const updateById = async (menuId, data) => {
  const { status } = await axios.patch(`${API_URL}/menus/${menuId}`, { data })
  return status === 200
}

const deleteById = async (menuId) => {
  const { data, status } = await axios.delete(`${API_URL}/menus/${menuId}`)
  return status === 200 ? data : null
}

export default {
  getDefaultMenu,
  getAll,
  getById,
  save,
  duplicate,
  updateById,
  deleteById,
}
