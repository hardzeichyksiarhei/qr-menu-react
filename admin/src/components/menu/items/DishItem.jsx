import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import { Button, Image, Space, Popconfirm } from 'antd'
import {
  CopyOutlined,
  SettingOutlined,
  DeleteOutlined,
  VerticalAlignMiddleOutlined,
} from '@ant-design/icons'

import * as menuActions from '../../../store/actions/menu'
import menuSelectors from '../../../store/selectors/menu'
import appSelectors from '../../../store/selectors/app'

import { SERVER_URL } from '../../../config'

import './DishItem.scss'

const DishItem = ({ dish, onAction }) => {
  const dispatch = useDispatch()

  const selectedCategoryId = useSelector(menuSelectors.selectedCategoryId)
  const menu = useSelector(menuSelectors.menu)
  const { defaultCurrency } = useSelector(appSelectors.settings)

  const handleClickDuplicateDish = () => {
    const { _id, ...copyDish } = dish
    dispatch(
      menuActions.addDish(selectedCategoryId, {
        ...copyDish,
        id: uuid(),
        title: `Copy of ${dish.title}`,
      }),
    )
  }

  const handleClickEditDish = () => {
    onAction('dish:edit', dish)
  }

  const handleClickDeleteDish = () => {
    dispatch(menuActions.deleteDish(selectedCategoryId, dish.id))
  }

  return (
    <div className="dish-item">
      <div className="dish-item__move move">
        <VerticalAlignMiddleOutlined />
      </div>
      <div className="dish-item__photo">
        <Image
          width={120}
          height={120}
          src={
            dish.photo
              ? `${SERVER_URL}/uploads/${dish.photo.userId}/thumbnail/${dish.photo.sizes.thumbnail}`
              : 'https://via.placeholder.com/300?text=QR Menu'
          }
          fallback="https://via.placeholder.com/300?text=QR Menu"
          preview={false}
        />
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
            <Popconfirm
              title="Are you sure to delete this item?"
              onConfirm={handleClickDeleteDish}
              okText="Yes"
              cancelText="No"
              placement="topRight"
            >
              <Button type="danger" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        </div>
        <div className="dish-item__price">
          <b>
            {dish.priceValue
              ? `${dish.priceValue}&nbsp;${menu.priceCurrency || defaultCurrency}`
              : 'Free'}
          </b>
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
