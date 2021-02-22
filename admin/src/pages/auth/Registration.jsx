/* eslint-disable prefer-promise-reject-errors */
import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'
import { Alert, Card, Form, Button, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { useAuth } from '../../auth/AuthProvider'
import translate from '../../intl/translate'

import * as authActions from '../../store/actions/auth'

import './Registration.scss'

const Registration = () => {
  const dispatch = useDispatch()
  const auth = useAuth()
  const navigate = useNavigate()
  const intl = useIntl()

  const redirectToRegistrationSuccessfully = useRef(() => {})

  const { isLoading, isRegistrationError, errorMessage, isRegistrated } = useSelector(
    (state) => state.auth,
  )

  const { registration } = auth

  const validateMessages = {
    required: intl.formatMessage({ id: 'FieldRequired' }),
    types: {
      email: intl.formatMessage({ id: 'Mail' }),
    },
  }

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

  return (
    <div className="registration">
      <Card
        className="registration-card"
        title={<h2 className="registration-card__title">QR Menu Clone</h2>}
      >
        <Form
          className="registration-form"
          layout="vertical"
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <h3 className="registration-form__title">{translate('Registration')}</h3>
          <Form.Item name="email" rules={[{ type: 'email', required: true }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]} hasFeedback>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder={intl.formatMessage({ id: 'Password' })}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'PleaseConfirmPassword' }),
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(translate('TwoPasswordIsNotSame'))
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder={intl.formatMessage({ id: 'ConfirmPassword' })}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="registration-form__sign-up"
            loading={isLoading}
            block
          >
            {translate('SignUp')}
          </Button>
        </Form>
        {isRegistrationError ? (
          <Alert
            className="registration-form__error mt-2"
            message={intl.formatMessage({ id: errorMessage })}
            type="error"
            showIcon
          />
        ) : null}
      </Card>
      <div className="registration__footer">
        <span>{translate('HaveAnAccount')}</span>
        <Link className="registration__sign-in" to="/login">
          {translate('SignIn')}
        </Link>
      </div>
    </div>
  )
}

export default Registration
