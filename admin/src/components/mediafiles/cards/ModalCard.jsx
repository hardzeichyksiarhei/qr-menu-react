import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Modal, Spin } from 'antd'

import mediafilesSelectors from '../../../store/selectors/mediafiles'
import { fetchPhotos } from '../../../store/actions/mediafiles'

import UploadCard from './UploadCard'
import PhotoItem from '../items/PhotoItem'

const ModalCard = ({ onSelectPhoto, visible, onCloseModal }) => {
  const { photos, isPhotosLoading } = useSelector(mediafilesSelectors.mediafiles)
  const photoList = useRef(photos)
  const dispatch = useDispatch()

  useEffect(() => {
    photoList.current = photos
  })

  useEffect(() => {
    dispatch(fetchPhotos())
  }, [dispatch])

  const deletePhotoItem = (id) => {
    const newArr = photoList.current.filter((photo) => photo.id !== id)
    photoList.current = newArr
  }

  const liftedUrl = (url) => onSelectPhoto(url)
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
      {isPhotosLoading || !photoList ? (
        <div className="ph-item-cont spin">
          <Spin size="medium" />
        </div>
      ) : (
        <div className="ph-item-cont">
          <UploadCard />
          {photoList.current.map((photo) => (
            <PhotoItem
              liftedUrl={liftedUrl}
              deletePhotoItem={deletePhotoItem}
              photo={photo}
              key={photo.id}
            />
          ))}
        </div>
      )}
    </Modal>
  )
}

ModalCard.propTypes = {
  onSelectPhoto: PropTypes.instanceOf(Function).isRequired,
  onCloseModal: PropTypes.instanceOf(Function).isRequired,
  visible: PropTypes.bool.isRequired,
}

export default ModalCard
