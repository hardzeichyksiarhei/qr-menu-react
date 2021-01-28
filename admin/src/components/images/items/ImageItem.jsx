import React from 'react'
import PropTypes from 'prop-types'

import { SelectOutlined, DeleteOutlined } from '@ant-design/icons'
import { Image, Spin } from 'antd'

import { SERVER_URL } from '../../../config'

const ImageItem = ({ liftedSelectImage, liftedDeleteImage, image }) => {
  const handleClickSelect = () => liftedSelectImage(image)
  const handleClickDelete = () => liftedDeleteImage(image.id)

  return (
    <div className="image-uploader-item">
      <Image
        className="image-uploader-item__image"
        src={`${SERVER_URL}/uploads/${image.userId}/thumbnail/${image.sizes.thumbnail}`}
        preview={false}
        fallback="https://via.placeholder.com/300?text=QR Menu"
        placeholder={<Spin size="small" />}
      />
      <SelectOutlined
        className="image-uploader-item__icon image-uploader-item__icon--select"
        size=""
        onClick={handleClickSelect}
      />
      <DeleteOutlined
        className="image-uploader-item__icon image-uploader-item__icon--delete"
        onClick={handleClickDelete}
      />
    </div>
  )
}

ImageItem.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
  liftedSelectImage: PropTypes.instanceOf(Function).isRequired,
  liftedDeleteImage: PropTypes.instanceOf(Function).isRequired,
}

export default ImageItem
