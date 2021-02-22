import React from 'react'
import PropTypes from 'prop-types'

import { DeleteOutlined } from '@ant-design/icons'
import { Image } from 'antd'

import { SERVER_URL } from '../../../config'

const ImageItem = ({ image, isSelected, onSelectImage, onDeleteImage }) => {
  const handleClickSelect = () => onSelectImage(image)
  const handleClickDelete = (event) => {
    onDeleteImage(image.id)
    event.stopPropagation()
  }

  return (
    <div
      className={`image-uploader-item ${isSelected ? 'active' : ''}`}
      onClick={handleClickSelect}
      onKeyDown={handleClickSelect}
      role="button"
      tabIndex="-1"
    >
      <Image
        className="image-uploader-item__image"
        src={`${SERVER_URL}/uploads/${image.userId}/thumbnail/${image.sizes.thumbnail}`}
        preview={false}
        fallback="https://via.placeholder.com/300?text=QR Menu"
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
