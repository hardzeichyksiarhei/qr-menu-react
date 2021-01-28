/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'

import { DeleteOutlined } from '@ant-design/icons'
import { Image, Spin } from 'antd'

import { SERVER_URL } from '../../../config'

const ImageItem = ({ liftedSelectImage, image }) => {
  const onSelected = () => liftedSelectImage(image)

  return (
    <div className="image-uploader-item" onClick={onSelected}>
      <Image
        className="image-uploader-item__image"
        src={`${SERVER_URL}/uploads/${image.userId}/thumbnail/${image.sizes.thumbnail}`}
        preview={false}
        fallback="https://via.placeholder.com/300?text=QR Menu"
        placeholder={<Spin size="small" />}
        onClick={onSelected}
      />
      <DeleteOutlined className="image-uploader-item__icon image-uploader-item__icon--delete-select" />
    </div>
  )
}

ImageItem.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
  liftedSelectImage: PropTypes.instanceOf(Function).isRequired,
}

export default ImageItem
