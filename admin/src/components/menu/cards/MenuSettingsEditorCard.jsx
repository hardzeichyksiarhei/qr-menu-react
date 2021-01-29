import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Button, Space, Form, Input, Switch } from 'antd'

import ImagesManagement from '../../images/ImagesManagement'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import './MenuSettingsEditorCard.scss'

const MenuSettingsEditorCard = ({ onCancel, onSave }) => {
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
        <Form.Item name="photo" label="Photo">
          <ImagesManagement previewSettings={{ width: 104, height: 104 }} />
        </Form.Item>
        <Form.Item className="mb-0" name="isPublished" label="Published" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name="isEnabledToOrder" label="Enabled To Order" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item className="mb-0" wrapperCol={{ span: 24 }}>
          <div className="category-editor-form__actions">
            <Space>
              <Button onClick={handleClickCancel}>Cancel</Button>
              <Button type="primary" htmlType="submit">
                Save
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
