import React, { useMemo } from 'react'

import { Card } from 'antd'

import { Chart } from 'react-charts'

import translate from '../../../intl/translate'

import './OrdersStatsCard.scss'

const OrdersStatsCard = () => {
  const data = useMemo(
    () => [
      {
        label: 'Orders',
        data: [...new Array(30)].map((_, idx) => ({
          primary: new Date(2020, 1, idx + 1),
          secondary: Math.random() * 100,
        })),
      },
    ],
    [],
  )

  const series = useMemo(
    () => ({
      type: 'bar',
    }),
    [],
  )

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
        <Chart data={data} series={series} axes={axes} tooltip />
      </div>
    </Card>
  )
}

export default OrdersStatsCard
