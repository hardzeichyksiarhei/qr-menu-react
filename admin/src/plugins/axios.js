import axios from 'axios'
import { notification } from 'antd'

import store from '../store'
import * as actions from '../store/actions/auth'

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
  (error) => {
    const { status } = error.response

    const state = store.getState()

    if (status === 401 && state.auth.token) {
      store.dispatch(actions.logout())
      notification.warning({
        message: 'Session Expired',
        description:
          'Logout from the Administration Panel was successful. To log in to Administration Panel, click on the "Sign in" button.',
        duration: null,
      })
    }
    return Promise.reject(error)
  },
)
