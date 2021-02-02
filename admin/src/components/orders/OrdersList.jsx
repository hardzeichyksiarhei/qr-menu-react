import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Table, PageHeader, Select, Spin, Empty, Space, Button, Modal, List } from 'antd'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { useIntl } from 'react-intl'

const { Option } = Select

const OrdersList = ({ orders, isOrdersLoading }) => {
  const intl = useIntl()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState({})
  const [selectedOrderList, setSelectedOrderList] = useState([])

  const showModal = (orderId) => {
    const order = orders.find((el) => el.orderNumber === orderId)
    setSelectedOrder(order)
    setSelectedOrderList(order.list)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Order Id',
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
      dataIndex: 'Action',
      key: 'Action',
      render: (__, record) => (
        <Space size="middle">
          <Button key="show_modal" onClick={() => showModal(record.OrderId)}>
            <EyeOutlined />
          </Button>
          <Button key="delete_order">
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ]

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

  return (
    <>
      <PageHeader ghost={false} title={intl.formatMessage({ id: 'Orders' })} />
      <Table
        bordered
        dataSource={orders.map((order) => ({
          key: order.orderNumber,
          OrderId: order.orderNumber,
          TableNumber: order.tableNumber,
          Total: order.totalPrice,
        }))}
        columns={columns}
      />
      <Modal
        title={`Order ${selectedOrder.orderNumber}`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <List
          size="large"
          header={<div>List:</div>}
          dataSource={selectedOrderList.map((order) => `${order.title} | x${order.quantity}`)}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Modal>
    </>
  )
}

OrdersList.propTypes = {
  orders: PropTypes.instanceOf(Array).isRequired,
  isOrdersLoading: PropTypes.bool.isRequired,
}

export default OrdersList
