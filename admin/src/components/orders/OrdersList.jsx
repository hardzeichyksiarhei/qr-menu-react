import React from 'react'
import { Table, PageHeader, Select } from 'antd'
import { useIntl } from 'react-intl'

const { Option } = Select

const dataSource = [
  // {
  //   OrderId: 1,
  //   Created: '3 days ago',
  //   Customer: 'Robert Vawer',
  //   Total: 303,
  //   Profit: 134,
  //   Status: 'Pending',
  // },
]

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
    title: 'Customer',
    dataIndex: 'Customer',
    key: 'Customer',
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
      <Select defaultValue="Pending">
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
]

const OrdersList = () => {
  const intl = useIntl()
  return (
    <>
      <PageHeader ghost={false} title={intl.formatMessage({ id: 'Orders' })} />

      <Table
        rowSelection={{
          type: 'checkbox',
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  )
}
export default OrdersList
