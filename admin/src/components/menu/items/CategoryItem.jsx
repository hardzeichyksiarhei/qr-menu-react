import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Image, Dropdown, Button, Menu } from 'antd'
import { EllipsisOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons'

import * as menuActions from '../../../store/actions/menu'

import './CategoryItem.scss'

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch()

  const handleClickCategory = () => {
    dispatch(menuActions.setSelectedCategoryId(category.id))
  }

  return (
    <div
      className="category-item"
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
      <div className="category-item__actions">
        <Dropdown
          overlay={
            <Menu style={{ minWidth: '100px' }}>
              <Menu.Item>Edit</Menu.Item>
              <Menu.Item>Visible</Menu.Item>
              <Menu.Item danger>Delete</Menu.Item>
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

CategoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
}

export default CategoryItem
