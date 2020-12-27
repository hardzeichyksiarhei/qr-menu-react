import React from 'react'

import { Button } from 'antd'

import { useAuth } from '../../auth/AuthProvider'

const Registration = () => {
  const auth = useAuth()

  const { login } = auth

  return (
    <>
      Registration
      <Button style={{ marginLeft: 10 }} onClick={login('testUser', 'testPassword')}>
        Registration
      </Button>
    </>
  )
}

export default Registration
