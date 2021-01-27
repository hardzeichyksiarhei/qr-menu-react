import React, { useState } from 'react'

import PropTypes from 'prop-types'

import SelectImageCard from './cards/SelectImageCard'
import ImagePreview from './ImagePreview'
import SelectButton from './items/SelectButton'

import './ImagesManagement.scss'

const MediafilesManagement = ({ image, onSelectImage, previewSettings }) => {
  const [localImage, setLocalImage] = useState(image)
  const [visible, setVisible] = useState(false)

  const onOpenModal = () => setVisible(true)
  const onCloseModal = () => setVisible(false)
  const onLocalSelectImage = (selectedImage) => {
    setLocalImage(selectedImage)
    onSelectImage(selectedImage)
  }
  const onClearImage = () => {
    setLocalImage(null)
    onSelectImage(null)
  }

  return (
    <>
      {localImage ? (
        <ImagePreview
          previewSettings={previewSettings}
          image={localImage}
          onOpenModal={onOpenModal}
          onClearImage={onClearImage}
        />
      ) : (
        <SelectButton onOpenModal={onOpenModal} />
      )}
      <SelectImageCard
        onSelectImage={onLocalSelectImage}
        visible={visible}
        onCloseModal={onCloseModal}
      />
    </>
  )
}

MediafilesManagement.defaultProps = {
  image: null,
  previewSettings: PropTypes.shape({
    width: null,
    height: null,
  }),
}
MediafilesManagement.propTypes = {
  image: PropTypes.instanceOf(Object),
  onSelectImage: PropTypes.instanceOf(Function).isRequired,
  previewSettings: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default MediafilesManagement
