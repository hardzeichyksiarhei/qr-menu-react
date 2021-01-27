import React from 'react'

import { Upload } from 'antd'

import UploadButton from '../items/UploadButton'

const UploadCard = () => (
  <Upload
    name="photo"
    listType="picture-card"
    className="photo-uploader ph-item-marg"
    showUploadList={false}
  >
    <UploadButton />
  </Upload>
)

export default UploadCard
