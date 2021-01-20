import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Image, Dropdown, Button, Menu } from 'antd'
import {
  EllipsisOutlined,
  VerticalAlignMiddleOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons'

import * as menuActions from '../../../store/actions/menu'

import './CategoryItem.scss'

const CategoryItem = ({ category, onAction }) => {
  const dispatch = useDispatch()

  const handleClickCategory = () => {
    dispatch(menuActions.setSelectedCategoryId(category.id))
  }

  const handleClickEditCategory = (event) => {
    onAction('category:edit', category)

    event.domEvent.stopPropagation()
  }

  const handleClickDeleteCategory = (event) => {
    dispatch(menuActions.deleteCategory(category.id))

    event.domEvent.stopPropagation()
  }

  return (
    <div
      className={`category-item ${!category.isVisible ? 'unvisible' : ''}`}
      onClick={handleClickCategory}
      onKeyDown={handleClickCategory}
      role="button"
      tabIndex="0"
    >
      <div className="category-item__photo">
        <Image width={60} height={60} src={category.photo} preview={false} />
      </div>
      <div className="category-item__content">
        <div className="category-item__title">{category.title}</div>
        <div className="category-item__meta">{category.dishes.length} items</div>
      </div>
      <div className="category-item__visible">
        {category.isVisible ? (
          <EyeOutlined style={{ color: '#1890ff' }} />
        ) : (
          <EyeInvisibleOutlined style={{ color: '#ffa940' }} />
        )}
      </div>
      <div className="category-item__actions">
        <Dropdown
          overlay={
            <Menu style={{ minWidth: '100px' }}>
              <Menu.Item onClick={handleClickEditCategory}>Edit</Menu.Item>
              <Menu.Item onClick={handleClickDeleteCategory} danger>
                Delete
              </Menu.Item>
            </Menu>
          }
          arrow
        >
          <Button icon={<EllipsisOutlined />} />
        </Dropdown>
      </div>
      <div className="category-item__move move">
        <VerticalAlignMiddleOutlined />
      </div>
    </div>
  )
}

CategoryItem.defaultProps = {
  onAction: () => {},
}

CategoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
  onAction: PropTypes.func,
}

export default CategoryItem
