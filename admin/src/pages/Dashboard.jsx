import React from 'react'
import { Row, Col } from 'antd'

import QRCodeCard from '../components/qrCode/QRCodeCard'

const Dashboard = () => (
  <Row>
    <Col span={24} xl={6} md={12} sm={24}>
      <QRCodeCard />
    </Col>
  </Row>
)

export default Dashboard
