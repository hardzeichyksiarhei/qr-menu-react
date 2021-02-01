import React from 'react'

// import { Row, Col } from 'antd'

import QRCodeCard from '../components/qrCode/QRCodeCard'
import CreateCardMenu from '../components/dashboard/cards/CreateCardMenu'

import './Dashboard.scss'

const Dashboard = () => (
  <div className="dashboard-grid">
    <div className="dashboard-col dashboard-col--qr-code">
      <QRCodeCard />
    </div>
    <div className="dashboard-col dashboard-col--create-menu">
      <CreateCardMenu />
    </div>
  </div>
)

export default Dashboard
