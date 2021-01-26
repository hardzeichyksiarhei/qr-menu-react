import React from 'react'

import { Row, Col } from 'antd'

import QRCodeCard from '../components/qrCode/QRCodeCard'

const Dashboard = () => (
  <>
    <Row>
      <Col span={6}>
        <QRCodeCard />
      </Col>
    </Row>
  </>
)

export default Dashboard
