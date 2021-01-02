import React from 'react'
import { Result, Button, Card } from 'antd'

const RegistrationSuccessfully = () => (
  <Card>
    <Result
      status="success"
      title="Registration completed successfully"
      extra={[
        <Button type="primary" key="console">
          Sign In
        </Button>,
      ]}
    />
  </Card>
)

export default RegistrationSuccessfully
