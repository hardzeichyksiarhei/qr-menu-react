import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Card, Button, Spin, Modal } from 'antd'

import { ReactSortable } from 'react-sortablejs'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import VerticalScrolling from '../../VerticalScrolling'
import CategoryItem from '../items/CategoryItem'
import CategoryEditorCard from './CategoryEditorCard'

import './CategoriesEditorCard.scss'

const CategoriesEditorCard = () => {
  const dispatch = useDispatch()

  const [isCategoryEditorVisible, setIsCategoryEditorVisible] = useState(false)
  const [editCategory, setEditCategory] = useState(null)

  const menuCategories = useSelector(menuSelectors.menuCategories)
  const isMenuLoading = useSelector(menuSelectors.isMenuLoading)

  const handleSetCategories = (categories) => {
    dispatch(menuActions.setCategories(categories))
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

  return (
    <div className="category-editor">
      <Card
        title={<h3 className="mb-0">Categories</h3>}
        extra={
          <Button type="primary" onClick={() => handleActionCategory('category:create')}>
            Add new
          </Button>
        }
      >
        <div
          className={`category-editor__content ${
            isMenuLoading ? 'category-editor__content--loading' : ''
          } ${!isMenuLoading && !menuCategories.length ? 'category-editor__content--empty' : ''}`}
        >
          {isMenuLoading ? (
            <Spin size="large" />
          ) : (
            <VerticalScrolling>
              <div className="category-list">
                <ReactSortable
                  list={menuCategories}
                  setList={handleSetCategories}
                  handle=".move"
                  animation={200}
                >
                  {menuCategories.map((category) => (
                    <CategoryItem
                      category={category}
                      key={category.id}
                      onAction={handleActionCategory}
                    />
                  ))}
                </ReactSortable>
              </div>
            </VerticalScrolling>
          )}
        </div>
      </Card>

      <Modal
        title={editCategory ? 'Edit Category' : 'Create category'}
        visible={isCategoryEditorVisible}
        footer={null}
        closable={false}
        destroyOnClose
      >
        <CategoryEditorCard editCategory={editCategory} onAction={handleActionCategory} />
      </Modal>
    </div>
  )
}

export default CategoriesEditorCard
