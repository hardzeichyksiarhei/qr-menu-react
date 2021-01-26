import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button, Image } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import { toggleModal } from '../../store/actions/mediafiles'

import ModalCard from './cards/ModalCard'
import './MediafilesManagement.scss'

const MediafilesManagement = () => {
  const dispatch = useDispatch()
  const [selectedPhotoUrl] = useState(null)
  const openModal = () => dispatch(toggleModal(true))

  const selectButton = (
    <div className="ph-upl-wr">
      <Button className="ph-upl-btn" type="dashed" onClick={openModal}>
        <PlusCircleOutlined />
        <span className="ph-upl-title">Select Photo</span>
      </Button>
    </div>
  )

  return (
    <>
      {selectedPhotoUrl ? (
        <Image
          src={selectedPhotoUrl}
          width={104}
          height={104}
          alt="dish photo"
          style={{ width: '100%' }}
          onClick={openModal}
        />
      ) : (
        selectButton
      )}
      <ModalCard />
    </>
  )
}

export default MediafilesManagement
