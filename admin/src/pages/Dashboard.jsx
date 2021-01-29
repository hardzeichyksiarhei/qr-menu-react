import React, { useState } from 'react'
import { Row, Col } from 'antd'

import ImagesManagement from '../components/images/ImagesManagement'

import QRCodeCard from '../components/qrCode/QRCodeCard'

const Dashboard = () => {
  const [image, setImage] = useState(null)

  const handleSelectImage = (img) => {
    console.log(img)
    setImage(img)
  }

  return (
    <>
      <Row>
        <Col span={6}>
          <QRCodeCard />
        </Col>
      </Row>
      <ImagesManagement
        previewSettings={{ width: 104, height: 104 }}
        onSelectImage={handleSelectImage}
        image={image}
      />
    </>
  )
}

export default Dashboard
