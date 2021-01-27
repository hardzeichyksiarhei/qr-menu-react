import React, { useState } from 'react'

import PropTypes from 'prop-types'

import ModalCard from './cards/ModalCard'
import SelectedPhotoCard from './cards/SelectedPhotoCard'
import SelectButton from './items/SelectButton'

import './MediafilesManagement.scss'

const MediafilesManagement = ({ url }) => {
  const [selectedUrl, setSelectedUrl] = useState(url)
  const [visible, setVisible] = useState(false)

  const onOpenModal = () => setVisible(true)
  const onCloseModal = () => setVisible(false)
  const onSelectPhoto = (photoUrl) => setSelectedUrl(photoUrl)
  const onClearPhoto = () => setSelectedUrl(null)
  return (
    <>
      {selectedUrl ? (
        <SelectedPhotoCard
          selectedUrl={selectedUrl}
          onOpenModal={onOpenModal}
          onClearPhoto={onClearPhoto}
        />
      ) : (
        <SelectButton onOpenModal={onOpenModal} />
      )}
      <ModalCard onSelectPhoto={onSelectPhoto} visible={visible} onCloseModal={onCloseModal} />
    </>
  )
}

MediafilesManagement.defaultProps = {
  url: null,
}
MediafilesManagement.propTypes = {
  url: PropTypes.string,
}

export default MediafilesManagement
