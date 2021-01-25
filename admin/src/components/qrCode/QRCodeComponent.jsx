import React from 'react'
import QRCode from 'react-qr-code'
import { Typography, Button } from 'antd'
import translate from '../../intl/translate'

import './QRCodeComponent.scss'

const { Title } = Typography

const QRCodeComponent = () => {
  const userId = localStorage.getItem('userId')
  const url = `https://www.qr-menu.com/${userId}`

  const downloadQRCode = () => {
    const svg = document.querySelector('#QRCode > svg')
    const link = document.createElement('a')
    const href = `data:image/svg+xml,${encodeURIComponent(svg.outerHTML)}`
    link.href = href
    link.download = 'QR-code.svg'
    link.click()
  }

  return (
    <div className="QRCode">
      <Title level={2}>{translate('QRCode')}</Title>
      <div id="QRCode">
        <QRCode value={url} size={120} />
      </div>
      <Button className="QRCode__download" type="primary" onClick={downloadQRCode}>
        {translate('Download')}
      </Button>
    </div>
  )
}

export default QRCodeComponent
