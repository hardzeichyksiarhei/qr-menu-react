/* eslint-disable prefer-promise-reject-errors */
import React from 'react'

import { Form, Button, Input, Typography } from 'antd'

import { useAuth } from '../../auth/AuthProvider'

const { Link } = Typography

const Registration = () => {
  const auth = useAuth()

  const { login } = auth

  const onFinish = (values) => {
    login(values.email, values.password)
  }

  return (
    <>
      Registration
      {/* <Button style={{ marginLeft: 10 }} onClick={login('testUser', 'testPassword')}>
        Registration
      </Button> */}
      <Form name="register" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              // type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('The two passwords that you entered do not match!')
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          <Link style={{ marginLeft: 10 }} href="login">
            log in
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default Registration
