import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import { Button, Space, Form, Input, Switch } from 'antd'

import ImagesManagement from '../../images/ImagesManagement'

import * as menuActions from '../../../store/actions/menu'

import './CategoryEditorCard.scss'

const categorySchema = () => ({
  title: 'New category',
  photo: null,
  isVisible: true,
  dishes: [],
})

const CategoryEditorCard = ({ editCategory, onAction }) => {
  const dispatch = useDispatch()

  const [categoryEditorForm] = Form.useForm()

  useEffect(() => {
    if (editCategory) categoryEditorForm.setFieldsValue(editCategory)
  }, [categoryEditorForm, editCategory])

  const handleClickCancel = () => {
    setTimeout(() => categoryEditorForm.resetFields(), 100)
    onAction('category:editor.cancel')
  }

  const handleClickSave = (category) => {
    if (editCategory) dispatch(menuActions.updateCategory(editCategory.id, category))
    else dispatch(menuActions.addCategory({ ...categorySchema(), ...category, id: uuid() }))

    setTimeout(() => categoryEditorForm.resetFields(), 100)
    onAction('category:editor.save')
  }

  return (
    <div className="category-editor">
      <Form
        className="category-editor-form"
        form={categoryEditorForm}
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={categorySchema()}
        onFinish={handleClickSave}
      >
        <Form.Item name="photo" label="Photo">
          <ImagesManagement previewSettings={{ width: 104, height: 104 }} />
        </Form.Item>
        <Form.Item name="isVisible" label="Visible" valuePropName="checked">
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
                Ok
              </Button>
            </Space>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

CategoryEditorCard.defaultProps = {
  editCategory: null,
  onAction: () => {},
}

CategoryEditorCard.propTypes = {
  editCategory: PropTypes.instanceOf(Object),
  onAction: PropTypes.func,
}

export default CategoryEditorCard
