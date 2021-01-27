import React from 'react'
import { Row, Col } from 'antd'

import MediafilesManagement from '../components/mediafiles/MediafilesManagement'

import QRCodeCard from '../components/qrCode/QRCodeCard'

const Dashboard = () => (
  <>
    <Row>
      <Col span={6}>
        <QRCodeCard />
      </Col>
    </Row>
    <MediafilesManagement url={null} />
    <MediafilesManagement url="https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <MediafilesManagement url="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
  </>
)

export default Dashboard
