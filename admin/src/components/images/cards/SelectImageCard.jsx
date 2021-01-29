import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useAsync } from 'react-use'

import { Modal, Button, Spin } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import UploadImageCard from './UploadImageCard'
import ImageItem from '../items/ImageItem'

import imagesService from '../../../services/images'

const SelectImageCard = ({ currentImage, onSelectImage, visible, onCloseModal }) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [imagesList, setImagesList] = useState([])
  const [localCurrentImage, setLocalCurrentImage] = useState(currentImage)

  useAsync(async () => {
    if (visible) {
      setIsImageLoading(true)
      const imagesResponse = await imagesService.getAll()
      setIsImageLoading(false)
      setImagesList(imagesResponse)
    }
  }, [visible])

  useEffect(() => {
    setLocalCurrentImage(currentImage)
  }, [currentImage])

  const handleSelectImage = (image) => setLocalCurrentImage(image)
  const handleDeleteImage = async (imageId) => {
    await imagesService.deleteById(imageId)
    setImagesList((prevState) => prevState.filter((image) => image.id !== imageId))
  }

  const handleSave = () => {
    onSelectImage(localCurrentImage)
    onCloseModal()
  }

  const handleCancel = () => onCloseModal()
  const handleUploadSuccess = (image) => setImagesList((prevState) => [image, ...prevState])

  return (
    <Modal
      className="image-uploader-modal"
      title={
        <div className="image-uploader-modal__header">
          <h4>Images</h4>
          <UploadImageCard onUploadSuccess={handleUploadSuccess}>
            <Button type="primary" icon={<UploadOutlined />}>
              Upload
            </Button>
          </UploadImageCard>
        </div>
      }
      visible={visible}
      width="80vw"
      onOk={handleSave}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Close"
      centered
    >
      {!imagesList.length && isImageLoading ? (
        <div className="image-uploader-loader">
          <Spin />
        </div>
      ) : (
        <div className="image-uploader-grid">
          {imagesList.map((image) => (
            <ImageItem
              image={image}
              isSelected={!!localCurrentImage && localCurrentImage.id === image.id}
              onSelectImage={handleSelectImage}
              onDeleteImage={handleDeleteImage}
              key={image.id}
            />
          ))}
        </div>
      )}
    </Modal>
  )
}

SelectImageCard.defaultProps = {
  currentImage: null,
}

SelectImageCard.propTypes = {
  currentImage: PropTypes.instanceOf(Object),
  onSelectImage: PropTypes.instanceOf(Function).isRequired,
  onCloseModal: PropTypes.instanceOf(Function).isRequired,
  visible: PropTypes.bool.isRequired,
}

export default SelectImageCard
