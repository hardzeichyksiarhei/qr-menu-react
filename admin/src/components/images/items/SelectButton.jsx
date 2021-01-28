import React from 'react'
import PropTypes from 'prop-types'

import { PlusCircleOutlined } from '@ant-design/icons'

const SelectButton = ({ onOpenModal, previewSettings }) => {
  const onOpen = () => {
    onOpenModal()
  }

  return (
    <button
      style={{ width: `${previewSettings.width}px`, height: `${previewSettings.height}px` }}
      className="image-uploader-select"
      type="button"
      onClick={onOpen}
    >
      <PlusCircleOutlined />
      <span>Select Photo</span>
    </button>
  )
}

SelectButton.defaultProps = {
  previewSettings: PropTypes.shape({
    width: 100,
    height: 100,
  }),
}

SelectButton.propTypes = {
  onOpenModal: PropTypes.instanceOf(Function).isRequired,
  previewSettings: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default SelectButton
