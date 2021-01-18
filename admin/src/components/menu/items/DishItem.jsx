import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Button, Image, Space } from 'antd'
import {
  CopyOutlined,
  SettingOutlined,
  DeleteOutlined,
  VerticalAlignMiddleOutlined,
} from '@ant-design/icons'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'

import './DishItem.scss'

const DishItem = ({ dish }) => {
  const dispatch = useDispatch()
  const selectedcategoryId = useSelector(menuSelectors.selectedCategoryId)

  const handleClickDeleteDish = () => {
    dispatch(menuActions.deleteDish(selectedcategoryId, dish.id))
  }

  return (
    <div className="dish-item">
      <div className="dish-item__move move">
        <VerticalAlignMiddleOutlined />
      </div>
      <div className="dish-item__photo">
        <Image width={120} height={120} src={dish.photo} preview={false} />
      </div>
      <div className="dish-item__content">
        <div className="dish-item__internalId">{dish.internalId}</div>
        <div className="dish-item__title">{dish.title}</div>
        <div className="dish-item__description">{dish.description}</div>
      </div>
      <div className="dish-item__actions">
        <div className="dish-item__controls">
          <Space>
            <Button icon={<CopyOutlined />} />
            <Button type="primary" icon={<SettingOutlined />} />
            <Button type="danger" icon={<DeleteOutlined />} onClick={handleClickDeleteDish} />
          </Space>
        </div>
        <div className="dish-item__price">
          <b>100$</b>
        </div>
      </div>
    </div>
  )
}

DishItem.propTypes = {
  dish: PropTypes.instanceOf(Object).isRequired,
}

export default DishItem
