import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import { Button, Space, Form, Input, Switch } from 'antd'

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

  const handleClickSave = (values) => {
    if (editCategory) dispatch(menuActions.updateCategory(editCategory.id, values))
    else dispatch(menuActions.addCategory({ ...categorySchema(), ...values, id: uuid() }))

    setTimeout(() => categoryEditorForm.resetFields(), 100)
    onAction('category:editor.save')
  }

  return (
    <div className="category-editor">
      <Form
        className="category-editor-form"
        form={categoryEditorForm}
        layout="vertical"
        initialValues={categorySchema()}
        onFinish={handleClickSave}
      >
        <Form.Item name="isVisible" label="Visible" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
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

CategoryEditorCard.defaultProps = {
  editCategory: null,
  onAction: () => {},
}

CategoryEditorCard.propTypes = {
  editCategory: PropTypes.instanceOf(Object),
  onAction: PropTypes.func,
}

export default CategoryEditorCard
