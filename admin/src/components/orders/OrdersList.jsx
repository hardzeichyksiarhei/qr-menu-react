import React from 'react'
import PropTypes from 'prop-types'
import { Table, PageHeader, Select, Spin, Empty, Space, Button } from 'antd'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'

const { Option } = Select

// const dataSource = [
// {
//   OrderId: 1,
//   Created: '3 days ago',
//   Customer: 'Robert Vawer',
//   Total: 303,
//   Profit: 134,
//   Status: 'Pending',
// },
// ]

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'OrderId',
    key: 'OrderId',
  },
  {
    title: 'Created',
    dataIndex: 'Created',
    key: 'Created',
  },
  {
    title: 'Table number',
    dataIndex: 'TableNumber',
    key: 'TableNumber',
  },
  {
    title: 'Total',
    dataIndex: 'Total',
    key: 'Total',
  },
  {
    title: 'Profit',
    dataIndex: 'Profit',
    key: 'Profit',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    render: () => (
      <Select style={{ width: '120px' }} defaultValue="New">
        <Option value="New" key="New">
          New
        </Option>
        <Option value="Pending" key="Pending">
          Pending
        </Option>
        <Option value="Confirmed" key="Confirmed">
          Confirmed
        </Option>
        <Option value="Cancelled" key="Cancelled">
          Cancelled
        </Option>
      </Select>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button>
          <EyeOutlined />
        </Button>
        <Button>
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  },
]

const OrdersList = ({ orders, isOrdersLoading }) => {
  const intl = useIntl()

  if (!orders.length && isOrdersLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Spin size="large" />
      </div>
    )
  }

  if (!orders.length && !isOrdersLoading) {
    return <Empty />
  }

  // const dataSource = orders.map((order) => ({
  //   OrderId: order.id,
  //   Created: order.createdAt,
  //   TableNumber: order.tableNumber,
  //   Total: order.totalPrice,
  // }))

  return (
    <>
      <PageHeader ghost={false} title={intl.formatMessage({ id: 'Orders' })} />

      <Table
        bordered
        dataSource={orders.map((order) => ({
          // eslint-disable-next-line no-underscore-dangle
          key: order._id,
          Created: order.createdAt,
          TableNumber: order.tableNumber,
          Total: order.totalPrice,
        }))}
        columns={columns}
      />
    </>
  )
}

OrdersList.propTypes = {
  orders: PropTypes.instanceOf(Array).isRequired,
  isOrdersLoading: PropTypes.bool.isRequired,
}

export default OrdersList
