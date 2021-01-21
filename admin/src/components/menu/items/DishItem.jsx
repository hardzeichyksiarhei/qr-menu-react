import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

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

const DishItem = ({ dish, onAction }) => {
  const dispatch = useDispatch()
  const selectedcategoryId = useSelector(menuSelectors.selectedCategoryId)

  const handleClickDuplicateDish = () => {
    dispatch(
      menuActions.addDish(selectedcategoryId, {
        ...dish,
        id: uuid(),
        title: `Copy of ${dish.title}`,
      }),
    )
  }

  const handleClickEditDish = () => {
    onAction('dish:edit', dish)
  }

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
            <Button icon={<CopyOutlined />} onClick={handleClickDuplicateDish} />
            <Button type="primary" icon={<SettingOutlined />} onClick={handleClickEditDish} />
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

DishItem.defaultProps = {
  onAction: () => {},
}

DishItem.propTypes = {
  dish: PropTypes.instanceOf(Object).isRequired,
  onAction: PropTypes.func,
}

export default DishItem
