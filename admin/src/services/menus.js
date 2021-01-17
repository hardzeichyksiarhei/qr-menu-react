import axios from 'axios'

import { API_URL } from '../config'

const MENUS = [
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
    categories: [
      {
        id: 'a946a5ae-1583-4e3a-8b74-b11952462e68',
        title: 'Today`S Specials',
        isVisible: true,
        photo:
          'https://images.unsplash.com/photo-1597315083776-7a6145780ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        dishes: [],
      },
      {
        id: 'd2412173-6a77-4168-8c3f-c7a608014c74',
        title: 'Soups',
        isVisible: true,
        photo:
          'https://images.unsplash.com/photo-1597315083776-7a6145780ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        dishes: [],
      },
      {
        id: 'c4e3cfe8-bcbd-4e59-b6a0-621d0c9bf07e',
        title: 'Deserts',
        visibility: true,
        photo:
          'https://images.unsplash.com/photo-1597315083776-7a6145780ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        dishes: [],
      },
      {
        id: '29e36f86-39d2-475a-90c7-0d72d20b6013',
        title: 'Main Course',
        visibility: true,
        photo:
          'https://images.unsplash.com/photo-1597315083776-7a6145780ed4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        dishes: [],
      },
    ],
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

const getAll = async () =>
  //   const { data, status } = await axios.get(`${API_URL}/menus`)
  //   return status === 200 && data ? data : []
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(MENUS)
    }, 2000),
  )

const getById = async ({ menuId }) =>
  // const { data, status } = await axios.get(`${API_URL}/menus/${menuId}`)
  // return status === 200 && data ? data : null
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MENUS.find((m) => m.id === menuId))
    }, 2000)
  })

const save = async (menu) => {
  const { data, status } = await axios.post(`${API_URL}/menus`, menu)
  return status === 200 && data ? data : null
}

export default {
  getAll,
  getById,
  save,
}
