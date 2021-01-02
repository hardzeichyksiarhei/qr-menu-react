/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Card, Form, Input, Button, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { useAuth } from '../../auth/AuthProvider'

import './Login.scss'

const validateMessages = {
  required: 'This field is required.',
  types: {
    email: 'This field must be a valid email address.',
  },
}

const Login = () => {
  const auth = useAuth()

  const { isLoading, isLoginError, errorMessage } = useSelector((state) => state.auth)

  const { login } = auth

  const onFinish = (values) => {
    const { email, password } = values

    login(email, password)()
  }

  return (
    <div className="login">
      <Card
        className="login-card"
        style={{ width: 500 }}
        title={<h2 className="login-card__title">QR Menu Clone</h2>}
      >
        <Form
          className="login-form"
          layout="vertical"
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <h3 className="login-form__title">Authorization</h3>
          <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="login-form__sign-in"
            loading={isLoading}
            block
          >
            Sign In
          </Button>

          {isLoginError ? (
            <Alert
              className="login-form__error mt-2"
              message={errorMessage}
              type="error"
              showIcon
            />
          ) : null}
        </Form>
      </Card>

      <div className="login__footer">
        <span>Don&apos;t have an account?</span>
        <Link className="login__sign-up" to="/registration">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login
