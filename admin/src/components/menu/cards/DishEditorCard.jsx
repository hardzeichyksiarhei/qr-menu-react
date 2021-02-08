import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import { useIntl } from 'react-intl'
import { Button, Space, Form, Input, Switch, Select, InputNumber } from 'antd'

import ImagesManagement from '../../images/ImagesManagement'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import { INGREDIENTS, TAGS, ALLERGENS } from '../../../default/menus.default'

import './DishEditorCard.scss'

export const dishSchema = () => ({
  categoryId: null,
  title: 'New dish',
  internalId: '',
  description: '',
  photo: null,
  isPublished: true,
  isEnabledToOrder: true,
  priceValue: null,
  tags: [],
  ingredients: [],
  allergens: [],
  rating: [
    { key: 1, value: 0 },
    { key: 2, value: 0 },
    { key: 3, value: 0 },
    { key: 4, value: 0 },
    { key: 5, value: 0 },
  ],
})

const DishEditorCard = ({ editDish, onAction }) => {
  const intl = useIntl()
  const dispatch = useDispatch()

  const [dishEditorForm] = Form.useForm()

  const menuCategories = useSelector(menuSelectors.menuCategories)
  const selectedCategoryId = useSelector(menuSelectors.selectedCategoryId)

  useEffect(() => {
    if (editDish) {
      const tags = editDish.tags.map((tag) => tag.id)
      const allergens = editDish.allergens.map((allergen) => allergen.number)
      dishEditorForm.setFieldsValue({ ...editDish, tags, allergens })
    }
  }, [dishEditorForm, editDish])

  useEffect(() => {
    dishEditorForm.setFieldsValue({ categoryId: selectedCategoryId })
  }, [dishEditorForm, selectedCategoryId])

  const handleClickCancel = () => {
    setTimeout(() => dishEditorForm.resetFields(), 100)
    onAction('dish:editor.cancel')
  }

  const handleClickSave = ({ categoryId, ...dish }) => {
    const isEdit = !!editDish

    const tags = dish.tags.reduce(
      (acc, tagId) => [...acc, TAGS.find((tag) => tag.id === tagId)],
      [],
    )

    const allergens = dish.allergens.reduce(
      (acc, allergenNumber) => [
        ...acc,
        ALLERGENS.find((allergen) => allergen.number === allergenNumber),
      ],
      [],
    )

    switch (true) {
      // Edit & Change CategoryId
      case isEdit && selectedCategoryId !== categoryId:
        dispatch(menuActions.deleteDish(selectedCategoryId, editDish.id))
        dispatch(menuActions.addDish(categoryId, { ...dish, tags, allergens }))
        break
      // Edit & NOT Change CategoryId
      case isEdit && selectedCategoryId === categoryId:
        dispatch(
          menuActions.updateDish(selectedCategoryId, editDish.id, { ...dish, tags, allergens }),
        )
        break
      // NOT Edit
      case !isEdit:
        dispatch(
          menuActions.addDish(categoryId, {
            ...dishSchema(),
            ...dish,
            tags,
            allergens,
            id: uuid(),
          }),
        )
        break
      default:
        break
    }

    setTimeout(() => dishEditorForm.resetFields(), 100)
    onAction('dish:editor.save')
  }

  return (
    <div className="dish-editor">
      <Form
        className="dish-editor-form"
        form={dishEditorForm}
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={dishSchema()}
        onFinish={handleClickSave}
      >
        <Form.Item name="photo" label={intl.formatMessage({ id: 'Photo' })}>
          <ImagesManagement previewSettings={{ width: 104, height: 104 }} />
        </Form.Item>
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

        <Form.Item
          label={intl.formatMessage({ id: 'Title' })}
          name="title"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="categoryId"
          label={intl.formatMessage({ id: 'Category' })}
          rules={[{ required: true }]}
        >
          <Select>
            {menuCategories.map((category) => (
              <Select.Option value={category.id} key={category.id}>
                {category.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'InternalId' })} name="internalId">
          <Input />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'Description' })} name="description">
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'Price' })} name="priceValue">
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'Ingredients' })} name="ingredients">
          <Select mode="tags" options={INGREDIENTS} />
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'Allergens' })} name="allergens">
          <Select className="allergens-list" mode="multiple">
            {ALLERGENS.map((allergen) => (
              <Select.Option
                className="allergens-item"
                value={allergen.number}
                key={allergen.number}
              >
                <div className="allergens-item-content">
                  <span>{allergen.number}</span> - <span>{allergen.label}</span>
                </div>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={intl.formatMessage({ id: 'Tags' })} name="tags">
          <Select className="tags-list" mode="multiple">
            {TAGS.map((tag) => (
              <Select.Option className="tags-item" value={tag.id} key={tag.id}>
                <div className="tags-item-content">
                  <span>{tag.label}</span>
                  <span>{tag.icon}</span>
                </div>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item className="mb-0" wrapperCol={{ span: 24 }}>
          <div className="dish-editor-form__actions">
            <Space>
              <Button onClick={handleClickCancel}>{intl.formatMessage({ id: 'Cancel' })}</Button>
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

DishEditorCard.defaultProps = {
  editDish: null,
  onAction: () => {},
}

DishEditorCard.propTypes = {
  editDish: PropTypes.instanceOf(Object),
  onAction: PropTypes.func,
}

export default DishEditorCard
