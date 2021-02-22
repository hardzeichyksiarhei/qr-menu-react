import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { Button, Space, Form, Input, Switch } from 'antd'

import ImagesManagement from '../../images/ImagesManagement'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'
import translate from '../../../intl/translate'

import './MenuSettingsEditorCard.scss'

const MenuSettingsEditorCard = ({ onCancel, onSave }) => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const menu = useSelector(menuSelectors.menu)

  const [menuSettingsEditorForm] = Form.useForm()

  const handleClickCancel = () => {
    setTimeout(() => menuSettingsEditorForm.resetFields(), 100)

    onCancel()
  }

  const handleClickSave = (menuSettings) => {
    dispatch(menuActions.update(menuSettings))

    setTimeout(() => menuSettingsEditorForm.resetFields(), 100)

    onSave()
  }

  return (
    <div className="category-editor">
      <Form
        className="category-editor-form"
        form={menuSettingsEditorForm}
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={menu}
        onFinish={handleClickSave}
      >
        <Form.Item
          className="mb-0"
          name="isPublished"
          label={intl.formatMessage({ id: 'Published' })}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item
          name="isEnabledToOrder"
          label={intl.formatMessage({ id: 'EnabledToOrder' })}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item name="photo" label={intl.formatMessage({ id: 'Photo' })}>
          <ImagesManagement previewSettings={{ width: 104, height: 104 }} />
        </Form.Item>
        <Form.Item
          label={intl.formatMessage({ id: 'Title' })}
          name="title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'InternalComment' })} name="internalComment">
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item
          className="mb-0"
          name="isPriceVisible"
          label={intl.formatMessage({ id: 'PriceVisible' })}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item
          name="isEnergyVisible"
          label={intl.formatMessage({ id: 'EnergyVisible' })}
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item className="mb-0" wrapperCol={{ span: 24 }}>
          <div className="category-editor-form__actions">
            <Space>
              <Button onClick={handleClickCancel}>{translate('Cancel')}</Button>
              <Button type="primary" htmlType="submit">
                Ok
              </Button>
            </Space>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

MenuSettingsEditorCard.defaultProps = {
  onCancel: () => {},
  onSave: () => {},
}

MenuSettingsEditorCard.propTypes = {
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
}

export default MenuSettingsEditorCard
