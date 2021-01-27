import React from 'react'
import PropTypes from 'prop-types'

import { SelectOutlined, DeleteOutlined } from '@ant-design/icons'
import { Image, Spin } from 'antd'

const ImageItem = ({ liftedSelectImage, image }) => {
  const onSelected = () => liftedSelectImage(image)

  return (
    <div className="ph-item-img-cont">
      <Image
        src={image.url}
        preview={false}
        placeholder={<Spin className="img-spin-center" size="small" />}
      />
      <SelectOutlined className="ph-item-icon select" onClick={onSelected} />
      <DeleteOutlined className="ph-item-icon delete" />
    </div>
  )
}

ImageItem.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
  liftedSelectImage: PropTypes.instanceOf(Function).isRequired,
}

export default ImageItem
