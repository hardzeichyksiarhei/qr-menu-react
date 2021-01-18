import React from 'react'
import PropTypes from 'prop-types'

import { Button, Image, Space } from 'antd'
import {
  CopyOutlined,
  SettingOutlined,
  DeleteOutlined,
  VerticalAlignMiddleOutlined,
} from '@ant-design/icons'

import './DishItem.scss'

const DishItem = ({ dish }) => (
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
          <Button type="danger" icon={<DeleteOutlined />} />
        </Space>
      </div>
      <div className="dish-item__price">
        <b>100$</b>
      </div>
    </div>
  </div>
)

DishItem.propTypes = {
  dish: PropTypes.instanceOf(Object).isRequired,
}

export default DishItem
