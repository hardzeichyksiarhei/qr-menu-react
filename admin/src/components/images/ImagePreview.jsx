import React from 'react'
import PropTypes from 'prop-types'

import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { Image } from 'antd'

import { SERVER_URL } from '../../config'

const ImagePreview = ({ image, onOpenModal, onClearImage, previewSettings }) => (
  <div
    style={{ width: `${previewSettings.width}px`, height: `${previewSettings.height}px` }}
    className="image-uploader-preview"
  >
    <Image
      width={previewSettings.width}
      height={previewSettings.height}
      preview={false}
      src={`${SERVER_URL}/uploads/${image.userId}/thumbnail/${image.sizes.thumbnail}`}
      alt="dish photo"
      style={{ width: '100%' }}
    />
    <EditOutlined
      className="image-uploader-preview-icon image-uploader-preview-icon--select"
      onClick={onOpenModal}
    />
    <DeleteOutlined
      className="image-uploader-preview-icon image-uploader-preview-icon--delete"
      onClick={onClearImage}
    />
  </div>
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
