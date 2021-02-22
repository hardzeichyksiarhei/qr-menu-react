import React from 'react'

import QRCodeCard from '../components/qrCode/QRCodeCard'
import CreateCardMenu from '../components/dashboard/cards/CreateCardMenu'
import OrdersStatsCard from '../components/dashboard/cards/OrdersStatsCard'
import PopularDishesCard from '../components/dashboard/cards/PopularDishesCard'

import './Dashboard.scss'

const Dashboard = () => (
  <div className="dashboard-grid">
    <div className="dashboard-col dashboard-col--qr-code">
      <QRCodeCard />
    </div>
    <div className="dashboard-col dashboard-col--create-menu">
      <CreateCardMenu />
    </div>
    <div className="dashboard-col dashboard-col--popular-dishes">
      <PopularDishesCard />
    </div>
    <div className="dashboard-col dashboard-col--orders-stats">
      <OrdersStatsCard />
    </div>
  </div>
)

export default Dashboard
