/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'

import { DeleteOutlined } from '@ant-design/icons'
import { Image, Spin } from 'antd'

import { SERVER_URL } from '../../../config'

const ImageItem = ({ image, isSelected, onSelectImage, onDeleteImage }) => {
  const handleClickSelect = () => onSelectImage(image)
  const handleClickDelete = () => onDeleteImage(image.id)

  return (
    <div
      className={`image-uploader-item ${isSelected ? 'active' : ''}`}
      onClick={handleClickSelect}
    >
      <Image
        className="image-uploader-item__image"
        src={`${SERVER_URL}/uploads/${image.userId}/thumbnail/${image.sizes.thumbnail}`}
        preview={false}
        fallback="https://via.placeholder.com/300?text=QR Menu"
        placeholder={<Spin size="small" />}
      />
      <DeleteOutlined onClick={handleClickDelete} className="image-uploader-item__delete" />
    </div>
  )
}

ImageItem.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelectImage: PropTypes.instanceOf(Function).isRequired,
  onDeleteImage: PropTypes.instanceOf(Function).isRequired,
}

export default ImageItem
