import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useAsync } from 'react-use'

import { Modal, Spin, Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import UploadImageCard from './UploadImageCard'
import ImageItem from '../items/ImageItem'
import UploadButton from '../items/UploadButton'

import imagesService from '../../../services/images'

const SelectImageCard = ({ onSelectImage, visible, onCloseModal }) => {
  const [imagesList, setImagesList] = useState([])

  useAsync(async () => {
    const imagesResponse = await imagesService.getAll()
    setImagesList(imagesResponse)
  })
  const liftedSelectImage = (selectedImage) => onSelectImage(selectedImage)
  const handleSave = () => onCloseModal()
  const handleCancel = () => onCloseModal()
  const handleUploadSuccess = (image) => setImagesList((prevState) => [image, ...prevState])

  return (
    <Modal
      className="ph-upl-modal"
      title={
        <div className="ph-upl-modal-header">
          <h4>Images</h4>
          <UploadImageCard onUploadSuccess={handleUploadSuccess}>
            <Button icon={<PlusCircleOutlined />} />
          </UploadImageCard>
        </div>
      }
      visible={visible}
      onOk={handleSave}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Close"
      centered
    >
      {!imagesList.length ? (
        <div className="ph-item-cont spin">
          <Spin size="medium" />
        </div>
      ) : (
        <div className="ph-item-cont">
          <UploadImageCard onUploadSuccess={handleUploadSuccess} listType="picture-card">
            <UploadButton />
          </UploadImageCard>
          {imagesList.map((image) => (
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
