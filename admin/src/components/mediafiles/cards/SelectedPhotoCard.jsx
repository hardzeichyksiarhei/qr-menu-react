import React from 'react'
import PropTypes from 'prop-types'

import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

import { Image, Card } from 'antd'

const SelectedPhotoCard = ({ selectedUrl, onOpenModal, onClearPhoto }) => (
  <Card className="ph-item-img-cont">
    <Image preview={false} src={selectedUrl} alt="dish photo" style={{ width: '100%' }} />
    <EditOutlined className="ph-item-icon select" onClick={onOpenModal} />
    <DeleteOutlined className="ph-item-icon delete" onClick={onClearPhoto} />
  </Card>
)

SelectedPhotoCard.defaultProps = {
  selectedUrl: null,
}

SelectedPhotoCard.propTypes = {
  selectedUrl: PropTypes.string,
  onOpenModal: PropTypes.instanceOf(Function).isRequired,
  onClearPhoto: PropTypes.instanceOf(Function).isRequired,
}

export default SelectedPhotoCard
