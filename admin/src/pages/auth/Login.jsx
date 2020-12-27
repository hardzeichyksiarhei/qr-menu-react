import React from 'react'

import { Button } from 'antd'

import { useAuth } from '../../auth/AuthProvider'

const Login = () => {
  const auth = useAuth()

  const { login } = auth

  return (
    <>
      Login
      <Button style={{ marginLeft: 10 }} onClick={login('testUser', 'testPassword')}>
        Login
      </Button>
    </>
  )
}

export default Login
