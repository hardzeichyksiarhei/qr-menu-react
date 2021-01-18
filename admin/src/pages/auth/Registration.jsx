/* eslint-disable prefer-promise-reject-errors */
import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Alert, Card, Form, Button, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { useAuth } from '../../auth/AuthProvider'

import * as authActions from '../../store/actions/auth'

import './Registration.scss'

const validateMessages = {
  required: 'This field is required.',
  types: {
    email: 'This field must be a valid email address.',
  },
}

const Registration = () => {
  const dispatch = useDispatch()
  const auth = useAuth()
  const navigate = useNavigate()

  const redirectToRegistrationSuccessfully = useRef(() => {})

  const { isLoading, isRegistrationError, errorMessage, isRegistrated } = useSelector(
    (state) => state.auth,
  )

  const { registration } = auth

  const onFinish = ({ email, password, confirmPassword }) => {
    registration(email, password, confirmPassword)()

    redirectToRegistrationSuccessfully.current = () =>
      navigate('/registration/successfully', { state: { email, password } })
  }

  useEffect(() => {
    redirectToRegistrationSuccessfully.current()
  }, [isRegistrated])

  useEffect(
    () => () => {
      dispatch(authActions.clearErrors())
    },
    [dispatch],
  )

  // if (isRegistrated) {
  //   return <Navigate to="/registration/successfully" />
  // }

  return (
    <div className="registration">
      <Card
        className="registration-card"
        style={{ width: 500 }}
        title={<h2 className="registration-card__title">QR Menu Clone</h2>}
      >
        <Form
          className="registration-form"
          layout="vertical"
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <h3 className="registration-form__title">Registration</h3>
          <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]} hasFeedback>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
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
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="registration-form__sign-up"
            loading={isLoading}
            block
          >
            Sign Up
          </Button>
        </Form>
        {isRegistrationError ? (
          <Alert
            className="registration-form__error mt-2"
            message={errorMessage}
            type="error"
            showIcon
          />
        ) : null}
      </Card>
      <div className="registration__footer">
        <span>Already have an account?</span>
        <Link className="registration__sign-in" to="/login">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default Registration
