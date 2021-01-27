import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Modal, Spin } from 'antd'

import UploadCard from './UploadCard'
import ImageItem from '../items/ImageItem'

const SelectImageCard = ({ onSelectImage, visible, onCloseModal }) => {
  const [imagesList] = useState(null)
  const liftedSelectImage = (selectedImage) => onSelectImage(selectedImage)
  const handleSave = () => onCloseModal()
  const handleCancel = () => onCloseModal()

  return (
    <Modal
      className="ph-upl-modal"
      title="Photos"
      visible={visible}
      onOk={handleSave}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Close"
      centered
    >
      {!imagesList ? (
        <div className="ph-item-cont spin">
          <Spin size="medium" />
        </div>
      ) : (
        <div className="ph-item-cont">
          <UploadCard />
          {imagesList.current.map((image) => (
            <ImageItem liftedSelectImage={liftedSelectImage} image={image} key={image.id} />
          ))}
        </div>
      )}
    </Modal>
  )
}

SelectImageCard.propTypes = {
  onSelectImage: PropTypes.instanceOf(Function).isRequired,
  onCloseModal: PropTypes.instanceOf(Function).isRequired,
  visible: PropTypes.bool.isRequired,
}

export default SelectImageCard
