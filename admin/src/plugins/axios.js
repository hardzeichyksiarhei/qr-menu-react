import axios from 'axios'

axios.interceptors.request.use((request) => request)

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)
