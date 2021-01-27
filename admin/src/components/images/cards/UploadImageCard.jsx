import React from 'react'
import PropTypes from 'prop-types'
import { Upload, message } from 'antd'
import imagesService from '../../../services/images'

const UploadImageCard = ({ onUploadSuccess, children, listType }) => {
  async function uploadImage({ onSuccess, onError, file }) {
    try {
      const data = await imagesService.upload(file)

      onSuccess(data, file)
    } catch (error) {
      onError()
    }
  }

  const props = {
    name: 'file',
    showUploadList: false,
    listType,
    customRequest: uploadImage,
    beforeUpload: (file) => {
      message.loading({ content: 'Loading...', key: 'imported' })

      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type.toLowerCase())) {
        message.error({ content: `${file.name} is not a image file`, key: 'uploaded-fail' })
        return false
      }
      return true
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success({
          content: `${info.file.name} file uploaded successfully`,
          key: 'uploaded',
        })

        onUploadSuccess(info.file.response)
      } else if (info.file.status === 'error') {
        message.error({ content: `${info.file.name} file upload failed.`, key: 'uploaded-fail' })
      }
    },
  }

  return (
    <Upload {...props} className="photo-uploader ph-item-marg">
      {children}
    </Upload>
  )
}

UploadImageCard.defaultProps = {
  onUploadSuccess: () => {},
  listType: 'text',
}

UploadImageCard.propTypes = {
  onUploadSuccess: PropTypes.func,
  children: PropTypes.node.isRequired,
  listType: PropTypes.string,
}

export default UploadImageCard
