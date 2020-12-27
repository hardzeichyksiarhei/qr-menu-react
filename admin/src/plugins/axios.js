import axios from 'axios'

import store from '../store'

axios.interceptors.request.use((request) => {
  const state = store.getState()

  const { token } = state.auth

  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`
  }

  return request
})

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)
