import React from 'react'
import PropTypes from 'prop-types'
import { Upload, message } from 'antd'
import imagesService from '../../../services/images'

const UploadImageCard = ({ onUploadSuccess, children }) => {
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
    customRequest: uploadImage,
    beforeUpload: (file) => {
      if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type.toLowerCase())) {
        message.error({ content: `${file.name} is not a image file`, key: 'uploaded-fail' })
        return false
      }

      if (file.size > 800000) {
        message.warning({
          content: `The "${file.name}" may not be greater than 800 kilobytes.`,
          key: 'uploaded-fail',
        })
        return false
      }

      message.loading({ content: 'Loading...', key: 'upload-loading' })

      return true
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success({
          content: `${info.file.name} file uploaded successfully`,
          key: 'upload-end',
        })

        onUploadSuccess(info.file.response)

        message.destroy('upload-loading')
      } else if (info.file.status === 'error') {
        message.error({ content: `${info.file.name} file upload failed.`, key: 'upload-fail' })
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
}

UploadImageCard.propTypes = {
  onUploadSuccess: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default UploadImageCard
