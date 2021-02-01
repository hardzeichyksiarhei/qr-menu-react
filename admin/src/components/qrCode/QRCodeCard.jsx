import React from 'react'

import { Button, Card, Image } from 'antd'
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'

import translate from '../../intl/translate'

import { API_URL, CLIENT_URL } from '../../config'

import './QRCodeCard.scss'

const QRCodeCard = () => {
  const userId = localStorage.getItem('userId')

  const qrCodeUrl = `${API_URL}/public/qr-code/users/${userId}`

  const downloadQRCode = (event) => {
    event.preventDefault()

    const link = document.createElement('a')
    link.href = `${qrCodeUrl}?mode=save`
    link.click()
  }

  return (
    <Card className="qr-code-card" hoverable>
      <div className="qr-code-image">
        <Image width="100%" src={`${qrCodeUrl}`} />
      </div>
      <div className="qr-code-actions">
        <Button type="primary" icon={<DownloadOutlined />} onClick={downloadQRCode}>
          <span>{translate('Download')}</span>
        </Button>
        <Button href={`${CLIENT_URL}/${userId}`} target="_blank" icon={<EyeOutlined />}>
          <span>View</span>
        </Button>
      </div>
    </Card>
  )
}

export default QRCodeCard
