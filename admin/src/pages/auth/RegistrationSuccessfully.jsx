import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Alert, Result, Button, Card } from 'antd'

import { useAuth } from '../../auth/AuthProvider'

const RegistrationSuccessfully = () => {
  const auth = useAuth()
  const location = useLocation()

  const { isLoading, isLoginError, errorMessage } = useSelector((state) => state.auth)

  const login = () => {
    const { email, password } = location.state
    auth.login(email, password)()
  }

  return (
    <Card>
      <Result
        status="success"
        title="Registration completed successfully"
        extra={[
          <Button type="primary" onClick={login} loading={isLoading} key="login">
            Sign In
          </Button>,
        ]}
      />
      {isLoginError ? (
        <Alert className="mt-2" message={errorMessage} type="error" showIcon />
      ) : null}
    </Card>
  )
}

export default RegistrationSuccessfully
