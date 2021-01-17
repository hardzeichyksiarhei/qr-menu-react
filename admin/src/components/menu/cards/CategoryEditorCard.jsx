import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Card, Button, Spin } from 'antd'

import { ReactSortable } from 'react-sortablejs'

import * as menuService from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import VerticalScrolling from '../../VerticalScrolling'
import CategoryItem from '../items/CategoryItem'

import './CategoryEditorCard.scss'

const CategoryEditorCard = () => {
  const dispatch = useDispatch()

  const menuCategories = useSelector(menuSelectors.menuCategories)
  const isMenuLoading = useSelector(menuSelectors.isMenuLoading)

  const handleSetCategories = (categories) => {
    dispatch(menuService.setCategories(categories))
  }

  return (
    <div className="category-editor">
      <Card title="Categories" extra={<Button type="primary">Add new</Button>}>
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
                    <CategoryItem category={category} key={category.id} />
                  ))}
                </ReactSortable>
              </div>
            </VerticalScrolling>
          )}
        </div>
      </Card>
    </div>
  )
}

export default CategoryEditorCard
