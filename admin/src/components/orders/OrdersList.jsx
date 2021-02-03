import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'
import moment from 'moment'

import { Table, PageHeader, Select, Space, Button, Modal, List, Popconfirm, Image } from 'antd'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import orderService from '../../services/orders'
import * as orderActions from '../../store/actions/orders'

import { SERVER_URL } from '../../config'

import './OrdersList.scss'

const { Option } = Select

const ORDER_STATUS = [
  { key: 'NEW', label: 'NEW', color: '#FF9800' },
  { key: 'PENDING', label: 'PENDING', color: '#4CAF50' },
  { key: 'CONFIRMED', label: 'CONFIRMED', color: '#607D8B' },
  { key: 'CANCELLED', label: 'CANCELLED', color: '#EF5350' },
]

const OrdersList = ({ orders, isOrdersLoading }) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState({})

  const removeOrder = async (orderId) => {
    await orderService.deleteById(orderId)
    dispatch(orderActions.removeOrder(orderId))
  }

  const updateOrder = async (newStatus, order) => {
    const updatedOrder = {
      status: newStatus,
    }
    await orderService.updateById(order.id, updatedOrder)
  }

  const showModal = (orderNumber) => {
    const order = orders.find((el) => el.orderNumber === orderNumber)
    setSelectedOrder(order)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Order Id',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      width: '100px',
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value) => moment(value).fromNow(),
    },
    {
      title: 'Table number',
      dataIndex: 'tableNumber',
      key: 'tableNumber',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: 'Total',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      width: '150px',
      render: (value, record) => `${value} ${record.currency}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '200px',
      render: (_, record) => (
        <Select
          style={{ minWidth: '150px' }}
          defaultValue={record.status}
          dropdownMatchSelectWidth={false}
          onChange={(value) => updateOrder(value, record)}
        >
          {ORDER_STATUS.map((status) => (
            <Option value={status.key} key={status.key}>
              <div className="status-item">
                <span className="status-mark" style={{ backgroundColor: status.color }} />
                {status.label}
              </div>
            </Option>
          ))}
        </Select>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      width: '100px',
      render: (_, record) => (
        <Space>
          <Button
            key="show_modal"
            onClick={() => showModal(record.orderNumber)}
            icon={<EyeOutlined />}
          />
          <Popconfirm
            title="Are you sure to delete this task?"
            placement="topRight"
            onConfirm={() => removeOrder(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" key="delete_order" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <div className="orders-list">
      <PageHeader
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ghost={false}
        title={intl.formatMessage({ id: 'Orders' })}
      />
      <Table bordered dataSource={orders} loading={isOrdersLoading} columns={columns} rowKey="id" />

      <Modal
        width={720}
        title={`Order ${selectedOrder.orderNumber}`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <List
          className="order-items"
          itemLayout="horizontal"
          dataSource={selectedOrder.items}
          renderItem={({ item, quantity }) => (
            <List.Item>
              <div className="order-item">
                <div className="order-item__photo">
                  <Image
                    width={65}
                    src={
                      item.photo
                        ? `${SERVER_URL}/uploads/${item.photo.userId}/thumbnail/${item.photo.sizes.thumbnail}`
                        : 'https://via.placeholder.com/80x80?text=QR Menu'
                    }
                    preview={false}
                  />
                </div>
                <div className="order-item__body">
                  <div className="order-item__content">
                    <h4 className="order-item__title">{item.title}</h4>
                    <div className="order-item__meta">
                      {item.ingredients.length ? (
                        <span>{item.ingredients.length} ingredients</span>
                      ) : null}
                      {item.tags.length ? <span>{item.tags.length} tags</span> : null}
                      {item.allergens.length ? (
                        <span>{item.allergens.length} allergens</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="order-item__prices">
                    <span className="price">
                      <b>
                        {item.priceValue} {selectedOrder.currency}
                      </b>
                    </span>
                    <span>
                      Quantity: <b>{quantity}</b>
                    </span>
                    <span>
                      Total:{' '}
                      <b>
                        {item.priceValue * quantity} {selectedOrder.currency}
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Modal>
    </div>
  )
}

OrdersList.propTypes = {
  orders: PropTypes.instanceOf(Array).isRequired,
  isOrdersLoading: PropTypes.bool.isRequired,
}

export default OrdersList
