import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Modal, Spin } from 'antd'

import mediafilesSelectors from '../../../store/selectors/mediafiles'
import { toggleModal, fetchPhotos, clearPhotos } from '../../../store/actions/mediafiles'

import UploadCard from './UploadCard'
import PhotoItem from '../items/PhotoItem'

const ModalCard = () => {
  const dispatch = useDispatch()
  const { photos, isPhotosLoading, isModalVisible } = useSelector(mediafilesSelectors.mediafiles)

  useEffect(() => {
    dispatch(fetchPhotos())

    return () => {
      dispatch(clearPhotos())
    }
  }, [dispatch])

  const closeModal = () => dispatch(toggleModal(false))
  const handleOk = () => closeModal()
  const handleCancel = () => closeModal()

  return (
    <Modal
      className="ph-upl-modal"
      title="Photos"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Close"
      destroyOnClose
      centered
    >
      {isPhotosLoading ? (
        <div className="ph-item-cont spin">
          <Spin size="medium" />
        </div>
      ) : (
        <div className="ph-item-cont">
          <UploadCard />
          {photos.map((photo) => (
            <PhotoItem photo={photo} key={photo.id} />
          ))}
        </div>
      )}
    </Modal>
  )
}

export default ModalCard
