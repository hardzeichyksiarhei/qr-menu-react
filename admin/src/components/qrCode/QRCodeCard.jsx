import React from 'react'

import { Button, Card, Image } from 'antd'
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'

import translate from '../../intl/translate'

import { API_URL } from '../../config'

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
    <Card className="qr-code-card" cover={<Image src={`${qrCodeUrl}`} />} hoverable>
      <div className="qr-code-actions">
        <Button
          type="primary"
          icon={<DownloadOutlined className="mr-05" />}
          onClick={downloadQRCode}
        >
          {translate('Download')}
        </Button>
        <Button icon={<EyeOutlined className="mr-05" />}>{translate('View')}</Button>
      </div>
    </Card>
  )
}

export default QRCodeCard
