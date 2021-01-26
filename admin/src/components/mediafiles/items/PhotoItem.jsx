import React from 'react'
import PropTypes from 'prop-types'

import { SelectOutlined, DeleteOutlined } from '@ant-design/icons'

import { Image } from 'antd'

const PhotoItem = ({ photo }) => (
  <div className="ph-item-img-cont">
    <Image src={photo.url} preview={false} />
    <SelectOutlined className="ph-item-icon select" />
    <DeleteOutlined className="ph-item-icon delete" />
  </div>
)

PhotoItem.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
}

export default PhotoItem
