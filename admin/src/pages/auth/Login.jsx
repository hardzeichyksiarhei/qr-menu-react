/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Form, Input, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { useAuth } from '../../auth/AuthProvider'

const { Link } = Typography

const Login = () => {
  const auth = useAuth()

  const { login } = auth

  const onFinish = (values) => {
    const { email, password } = values
    login(email, password)
  }

  return (
    <>
      Login
      {/* <Button style={{ marginLeft: 10 }} onClick={login('testUser', 'testPassword')}>
        Login
      </Button> */}
      <Form
        name="login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              // type: 'email',
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link className="login-form-forgot" href="">
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <Link style={{ marginLeft: 10 }} href="registration">
            register now!
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default Login
