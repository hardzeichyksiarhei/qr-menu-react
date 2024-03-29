import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import { useIntl } from 'react-intl'

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

import { dishSchema } from '../cards/DishEditorCard'

import { SERVER_URL, CURRENCIES } from '../../../config'
import translate from '../../../intl/translate'

import './DishItem.scss'

const DishItem = ({ dish, onAction }) => {
  const intl = useIntl()
  const dispatch = useDispatch()

  const selectedCategoryId = useSelector(menuSelectors.selectedCategoryId)
  const menu = useSelector(menuSelectors.menu)
  const { defaultCurrency } = useSelector(appSelectors.settings)
  const copyOfTranslate = intl.formatMessage({ id: 'CopyOf' })
  const handleClickDuplicateDish = () => {
    const { _id, rating, createdAt, updatedAt, ...copyDish } = dish
    dispatch(
      menuActions.addDish(selectedCategoryId, {
        ...copyDish,
        id: uuid(),
        title: `${copyOfTranslate} ${dish.title}`,
        rating: dishSchema().rating,
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
        <div className="dish-item__meta">
          {dish.ingredients.length ? (
            <span>
              {dish.ingredients.length} {translate('ingredients')}
            </span>
          ) : null}
          {dish.tags.length ? (
            <span>
              {dish.tags.length} {translate('tags')}
            </span>
          ) : null}
          {dish.allergens.length ? (
            <span>
              {dish.allergens.length} {translate('allergens')}
            </span>
          ) : null}
        </div>
      </div>
      <div className="dish-item__actions">
        <div className="dish-item__controls">
          <Space>
            <Button icon={<CopyOutlined />} onClick={handleClickDuplicateDish} />
            <Button type="primary" icon={<SettingOutlined />} onClick={handleClickEditDish} />
            <Popconfirm
              title={intl.formatMessage({ id: 'AreYouSureToDeleteThisItem' })}
              onConfirm={handleClickDeleteDish}
              okText={intl.formatMessage({ id: 'Yes' })}
              cancelText={intl.formatMessage({ id: 'No' })}
              placement="topRight"
            >
              <Button type="danger" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        </div>
        <div className="dish-item__price">
          <b>
            {dish.priceValue
              ? `${dish.priceValue} ${CURRENCIES[menu.priceCurrency || defaultCurrency]}`
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
