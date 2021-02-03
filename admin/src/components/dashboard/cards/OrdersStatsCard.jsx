import React, { useMemo, useState } from 'react'
import { useAsync } from 'react-use'

import { Card } from 'antd'

import { Chart } from 'react-charts'

import translate from '../../../intl/translate'

import ordersService from '../../../services/orders'

import './OrdersStatsCard.scss'

const OrdersStatsCard = () => {
  const [orders, setOrders] = useState([])

  useAsync(async () => {
    const ordersResponse = await ordersService.getOrdersForChart()
    setOrders(
      ordersResponse.map((order) => ({
        primary: new Date(order.primary),
        secondary: order.secondary,
      })),
    )
  }, [])

  const data = useMemo(
    () => [
      {
        label: 'Orders',
        data: orders,
      },
    ],
    [orders],
  )

  const series = useMemo(() => ({}), [])

  const axes = useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  )

  return (
    <Card className="orders-stats-card" bodyStyle={{ padding: '10px 20px' }} hoverable>
      <h3 className="orders-stats-card__title">{translate('HistoryOrders')}</h3>
      <div
        style={{
          height: '300px',
          overflow: 'hidden',
        }}
      >
        {orders.length ? <Chart data={data} series={series} axes={axes} tooltip /> : null}
      </div>
    </Card>
  )
}

export default OrdersStatsCard
