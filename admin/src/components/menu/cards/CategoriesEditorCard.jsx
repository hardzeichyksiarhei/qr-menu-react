/* eslint-disable no-nested-ternary */
import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'

import { Card, Button, Spin, Modal, Empty } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { ReactSortable } from 'react-sortablejs'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import VerticalScrolling from '../../VerticalScrolling'
import CategoryItem from '../items/CategoryItem'
import CategoryEditorCard from './CategoryEditorCard'
import translate from '../../../intl/translate'
import './CategoriesEditorCard.scss'

const CategoriesEditorCard = () => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const isSortingRef = useRef(false)

  const [isCategoryEditorVisible, setIsCategoryEditorVisible] = useState(false)
  const [editCategory, setEditCategory] = useState(null)

  const menuCategories = useSelector(menuSelectors.menuCategories)
  const isMenuLoading = useSelector(menuSelectors.isMenuLoading)

  const handleSetCategories = (sortedCategories) => {
    if (!isSortingRef.current) return
    isSortingRef.current = false
    dispatch(menuActions.setCategories(sortedCategories))
  }

  const handleUpdateCategories = () => {
    isSortingRef.current = true
  }

  const handleActionCategory = (action, category = null /* payload */) => {
    switch (action) {
      case 'category:edit':
        setIsCategoryEditorVisible(true)
        setEditCategory(category)
        break
      case 'category:create':
        setIsCategoryEditorVisible(true)
        break
      case 'category:editor.save':
        setIsCategoryEditorVisible(false)
        setEditCategory(null)
        break
      case 'category:editor.cancel':
        setIsCategoryEditorVisible(false)
        setEditCategory(null)
        break
      default:
        // eslint-disable-next-line no-console
        console.warn('Category action not found')
    }
  }

  let categoryList = null
  if (isMenuLoading) {
    categoryList = <Spin size="large" />
  } else if (!menuCategories.length && !isMenuLoading) {
    categoryList = <Empty />
  } else {
    categoryList = (
      <VerticalScrolling>
        <div className="category-list">
          <ReactSortable
            list={menuCategories}
            setList={handleSetCategories}
            onUpdate={handleUpdateCategories}
            handle=".move"
            animation={200}
          >
            {menuCategories.map((category) => (
              <CategoryItem category={category} key={category.id} onAction={handleActionCategory} />
            ))}
          </ReactSortable>
        </div>
      </VerticalScrolling>
    )
  }

  return (
    <div className="category-editor">
      <Card
        title={<h3 className="mb-0">{translate('Categories')}</h3>}
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => handleActionCategory('category:create')}
          >
            {translate('AddNew')}
          </Button>
        }
      >
        <div
          className={`category-editor__content ${
            isMenuLoading ? 'category-editor__content--loading' : ''
          } ${!isMenuLoading && !menuCategories.length ? 'category-editor__content--empty' : ''}`}
        >
          {categoryList}
        </div>
      </Card>

      <Modal
        title={
          editCategory
            ? intl.formatMessage({ id: 'EditCategory' })
            : intl.formatMessage({ id: 'CreateCategory' })
        }
        visible={isCategoryEditorVisible}
        footer={null}
        closable={false}
        destroyOnClose
        centered
      >
        <CategoryEditorCard editCategory={editCategory} onAction={handleActionCategory} />
      </Modal>
    </div>
  )
}

export default CategoriesEditorCard
