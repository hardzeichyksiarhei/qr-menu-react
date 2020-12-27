import React, { useCallback, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import * as authActions from '../store/actions/auth'

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
  registration: () => {},
  logout: () => {},
})

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { user, token } = useSelector((state) => state.auth)

  const login = useCallback(() => {
    dispatch(authActions.login())
  }, [dispatch])

  const logout = useCallback(() => {
    dispatch(authActions.registration())
  }, [dispatch])

  const registration = useCallback(() => {
    dispatch(authActions.logout())
  }, [dispatch])

  return (
    <AuthContext.Provider
      value={{
        isAuth: user && token,
        login,
        registration,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  return ctx
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider
