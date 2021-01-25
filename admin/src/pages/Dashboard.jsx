import React, { useState } from 'react'
import { Button } from 'antd'
import { FileImageOutlined } from '@ant-design/icons'

import MediafilesManagement from '../components/mediafiles/MediafilesManagement'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showMedia = () => {
    setIsOpen(() => !isOpen)
  }

  return (
    <>
      <MediafilesManagement isOpen={isOpen} />
      <Button type="primary" onClick={showMedia} icon={<FileImageOutlined />} />
    </>
  )
}

export default Dashboard
