import axios from 'axios'

import { API_URL } from '../config'

const getAll = async () =>
  //   const { data, status } = await axios.get(`${API_URL}/menus`)
  //   return status === 200 && data ? data : []

  [
    {
      id: 1,
      title: 'Menu title 1',
      photo:
        'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      categories: [],
      createdAt: new Date(),
    },
    {
      id: 2,
      title: 'Menu title 2',
      photo:
        'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      categories: [],
      createdAt: new Date(),
    },
    {
      id: 3,
      title: 'Menu title 3',
      photo:
        'https://images.unsplash.com/photo-1588566565463-180a5b2090d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      categories: [],
      createdAt: new Date(),
    },
    {
      id: 4,
      title: 'Menu title 4',
      photo:
        'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      categories: [],
      createdAt: new Date(),
    },
  ]

const getById = async (menuId) => {
  const { data, status } = await axios.get(`${API_URL}/menus/${menuId}`)
  return status === 200 && data ? data : null
}

const save = async (menu) => {
  const { data, status } = await axios.post(`${API_URL}/menus`, menu)
  return status === 200 && data ? data : null
}

export default {
  getAll,
  getById,
  save,
}
