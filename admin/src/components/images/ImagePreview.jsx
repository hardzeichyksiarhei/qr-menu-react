import React from 'react'
import PropTypes from 'prop-types'

import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { Image, Card } from 'antd'

import { API_URL } from '../../config'

const ImagePreview = ({ image, onOpenModal, onClearImage }) => (
  <Card className="ph-item-img-cont">
    <Image
      preview={false}
      src={`${API_URL}/uploads/${image.userId}/large/${image.sizes.large}`}
      alt="dish photo"
      style={{ width: '100%' }}
    />
    <EditOutlined className="ph-item-icon select" onClick={onOpenModal} />
    <DeleteOutlined className="ph-item-icon delete" onClick={onClearImage} />
  </Card>
)

ImagePreview.defaultProps = {
  image: null,
}

ImagePreview.propTypes = {
  image: PropTypes.instanceOf(Object),
  onOpenModal: PropTypes.instanceOf(Function).isRequired,
  onClearImage: PropTypes.instanceOf(Function).isRequired,
}

export default ImagePreview
