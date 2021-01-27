import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

const SelectButton = ({ onOpenModal }) => {
  const onOpen = () => {
    onOpenModal()
  }

  return (
    <div className="ph-upl-wr">
      <Button className="ph-upl-btn" type="dashed" onClick={onOpen}>
        <PlusCircleOutlined />
        <span className="ph-upl-title">Select Photo</span>
      </Button>
    </div>
  )
}

SelectButton.propTypes = {
  onOpenModal: PropTypes.instanceOf(Function).isRequired,
}

export default SelectButton
