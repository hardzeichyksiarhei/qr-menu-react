import React from 'react'
import QRCode from 'react-qr-code'
import { Typography } from 'antd'

const { Title } = Typography

const QRCodeComponent = () => {
  const userId = localStorage.getItem('userId')
  const url = `https://www.qr-menu.com/${userId}`
  return (
    <>
      <Title level={2}>QR-code</Title>
      <QRCode value={url} size={120} />
    </>
  )
}

export default QRCodeComponent
