import React from 'react'

import { Card, Empty } from 'antd'

import QRCodeCard from '../components/qrCode/QRCodeCard'
import CreateCardMenu from '../components/dashboard/cards/CreateCardMenu'
import OrdersStatsCard from '../components/dashboard/cards/OrdersStatsCard'

import './Dashboard.scss'

const Dashboard = () => (
  <div className="dashboard-grid">
    <div className="dashboard-col dashboard-col--qr-code">
      <QRCodeCard />
    </div>
    <div className="dashboard-col dashboard-col--create-menu">
      <CreateCardMenu />
    </div>
    <div className="dashboard-col dashboard-col--empty">
      <Card style={{ height: '100%' }} bodyStyle={{ height: '100%', padding: 0 }} bordered>
        <div
          style={{ height: '100%' }}
          className="d-flex align-items-center justify-content-center"
        >
          <Empty />
        </div>
      </Card>
    </div>
    <div className="dashboard-col dashboard-col--orders-stats">
      <OrdersStatsCard />
    </div>
  </div>
)

export default Dashboard
