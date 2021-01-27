import React from 'react'
import PropTypes from 'prop-types'

import { SelectOutlined, DeleteOutlined } from '@ant-design/icons'
import { Image, Spin } from 'antd'

const PhotoItem = ({ liftedUrl, photo, deletePhotoItem }) => {
  const selected = () => liftedUrl(photo.url)
  const onDelete = () => deletePhotoItem(photo.id)

  return (
    <div className="ph-item-img-cont">
      <Image
        src={photo.url}
        preview={false}
        placeholder={<Spin className="img-spin-center" size="small" />}
      />
      <SelectOutlined className="ph-item-icon select" onClick={selected} />
      <DeleteOutlined className="ph-item-icon delete" onClick={onDelete} />
    </div>
  )
}

PhotoItem.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
  liftedUrl: PropTypes.instanceOf(Function).isRequired,
  deletePhotoItem: PropTypes.instanceOf(Function).isRequired,
}

export default PhotoItem
