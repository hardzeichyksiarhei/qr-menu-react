import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import SelectImageCard from './cards/SelectImageCard'
import ImagePreview from './ImagePreview'
import SelectButton from './items/SelectButton'

import './ImagesManagement.scss'

const ImagesManagement = ({ image, value, onSelectImage, onChange, previewSettings }) => {
  const [localImage, setLocalImage] = useState(image || value)
  const [visible, setVisible] = useState(false)

  const onOpenModal = () => setVisible(true)
  const onCloseModal = () => setVisible(false)

  const onLocalSelectImage = (selectedImage) => {
    setLocalImage(selectedImage)

    onSelectImage(selectedImage)
    onChange(selectedImage)
  }

  useEffect(() => {
    setLocalImage(image || value)
  }, [image, value])

  const onClearImage = () => {
    setLocalImage(null)

    onSelectImage(null)
    onChange(null)
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
        <SelectButton previewSettings={previewSettings} onOpenModal={onOpenModal} />
      )}
      <SelectImageCard
        currentImage={localImage}
        onSelectImage={onLocalSelectImage}
        visible={visible}
        onCloseModal={onCloseModal}
      />
    </>
  )
}

ImagesManagement.defaultProps = {
  value: null,
  image: null,
  previewSettings: PropTypes.shape({
    width: 100,
    height: 100,
  }),
  onSelectImage: () => {},
  onChange: () => {},
}

ImagesManagement.propTypes = {
  value: PropTypes.instanceOf(Object),
  image: PropTypes.instanceOf(Object),
  onSelectImage: PropTypes.instanceOf(Function),
  onChange: PropTypes.instanceOf(Function),
  previewSettings: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default ImagesManagement
