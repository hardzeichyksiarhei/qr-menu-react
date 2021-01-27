import React from 'react'
import PropTypes from 'prop-types'

import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { Image, Card } from 'antd'

import { SERVER_URL } from '../../config'

const ImagePreview = ({ image, onOpenModal, onClearImage, previewSettings }) => (
  <Card className="ph-item-img-cont">
    <Image
      width={previewSettings.width}
      height={previewSettings.height}
      preview={false}
      src={`${SERVER_URL}/uploads/${image.userId}/thumbnail/${image.sizes.thumbnail}`}
      alt="dish photo"
      style={{ width: '100%' }}
    />
    <EditOutlined className="ph-item-icon select" onClick={onOpenModal} />
    <DeleteOutlined className="ph-item-icon delete" onClick={onClearImage} />
  </Card>
)

ImagePreview.defaultProps = {
  image: null,
  previewSettings: PropTypes.shape({
    width: null,
    height: null,
  }),
}

ImagePreview.propTypes = {
  image: PropTypes.instanceOf(Object),
  onOpenModal: PropTypes.instanceOf(Function).isRequired,
  onClearImage: PropTypes.instanceOf(Function).isRequired,
  previewSettings: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default ImagePreview
