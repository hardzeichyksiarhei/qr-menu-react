import React from 'react'

import { Upload, message } from 'antd'

import UploadButton from '../items/UploadButton'

const UploadCard = () => {
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  return (
    <Upload
      name="photo"
      listType="picture-card"
      className="photo-uploader ph-item-marg"
      showUploadList={false}
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      // onChange={this.handleChange}
    >
      <UploadButton />
    </Upload>
  )
}

export default UploadCard
