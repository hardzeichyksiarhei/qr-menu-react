// import axios from 'axios'

// import { API_URL } from '../config'

const PHOTOS = [
  {
    id: 0,
    name: 'photo 0',
    status: 'done',
    url:
      'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 1,
    name: 'photo 1',
    status: 'done',
    url:
      'https://images.unsplash.com/photo-1599077971981-99c35aa835e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 2,
    name: 'photo 2',
    status: 'done',
    url:
      'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    name: 'photo 3',
    status: 'done',
    url:
      'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
]

const getAllPhotos = async () =>
  // const { data, status } = await axios.get(`${API_URL}/photos`)
  // return status === 200 && data ? data : []
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(PHOTOS)
    }, 2000),
  )

export default {
  getAllPhotos,
}
