import React from 'react'
import QrReader from 'react-qr-reader'

import { Card, notification } from 'antd'

import { CLIENT_URL } from '../config'

import './QrCodeScanner.scss'

const QrCodeScanner = () => {
  const handleError = () => {
    notification.error({
      message: 'Error',
      description: 'QR Code scan error',
    })
  }

  const handleScan = (data) => {
    if (typeof data !== 'string') return
    if (data.startsWith(CLIENT_URL)) {
      window.location.href = data
    }
  }

  return (
    <div className="qr-code-scanner-page">
      <Card className="qr-code-scanner-card" bodyStyle={{ paddingTop: 15 }}>
        <h3 className="qr-code-scanner-card__title">QR Menu Clone</h3>
        <QrReader
          className="qr-code-scanner"
          delay={500}
          onError={handleError}
          onScan={handleScan}
        />
      </Card>
    </div>
  )
}

export default QrCodeScanner
