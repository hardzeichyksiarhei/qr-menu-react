import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useAsync } from 'react-use'

import { Modal, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import UploadImageCard from './UploadImageCard'
import ImageItem from '../items/ImageItem'

import imagesService from '../../../services/images'

const SelectImageCard = ({ currentImage, onSelectImage, visible, onCloseModal }) => {
  const [imagesList, setImagesList] = useState([])
  const [localCurrentImage, setLocalCurrentImage] = useState(currentImage)

  useAsync(async () => {
    const imagesResponse = await imagesService.getAll()
    setImagesList(imagesResponse)
  })
  const changeCurrentImage = (selectedImage) => setLocalCurrentImage(selectedImage)
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
      <div className="image-uploader-grid">
        {imagesList?.map((image) => (
          <ImageItem changeCurrentImage={changeCurrentImage} image={image} key={image.id} />
        ))}
      </div>
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
