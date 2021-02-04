import React, { useEffect, useState, useCallback } from 'react'
import { useAsync } from 'react-use'

import { Card } from 'antd'

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

import socket from '../../../socket'
import translate from '../../../intl/translate'

import ordersService from '../../../services/orders'

import './OrdersStatsCard.scss'

const OrdersStatsCard = () => {
  const [orders, setOrders] = useState([])
  useAsync(async () => {
    const ordersResponse = await ordersService.getOrdersForChart()
    setOrders(ordersResponse)
  }, [])

  const addOrderHandler = useCallback(
    ({ orderDate }) => {
      if (!orderDate) return

      const orderIdx = orders.findIndex((order) => order.date === orderDate)
      if (orderIdx !== -1) {
        setOrders((prevOrders) =>
          prevOrders.map((order, idx) =>
            orderIdx === idx ? { date: order.date, count: order.count + 1 } : order,
          ),
        )
      } else {
        setOrders((prevOrders) => [...prevOrders, { date: orderDate, count: 1 }])
      }
    },
    [orders],
  )

  useEffect(() => {
    socket.on('ROOM:ADD_ORDER_FOR_CHART', addOrderHandler)
    return () => {
      socket.off('ROOM:ADD_ORDER_FOR_CHART', addOrderHandler)
    }
  }, [addOrderHandler])

  return (
    <Card className="orders-stats-card" bodyStyle={{ padding: '10px 20px' }} hoverable>
      <h3 className="orders-stats-card__title">{translate('HistoryOrders')}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={orders}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <Tooltip />
          <Bar type="monotone" dataKey="count" fill="#1890ff" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default OrdersStatsCard
