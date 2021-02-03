import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Table, Button, Input, Typography, Empty, Space, notification, message } from 'antd'
import orderSelectors from '../../store/selectors/order'
import * as orderActions from '../../store/actions/order'
import saveOrder from '../../services/orders'
import appSelectors from '../../store/selectors/app'

import './Basket.scss'

const { TextArea } = Input
const { Title } = Typography

const openNotificationWithIcon = () => {
  notification['success']({
    message: 'Your order was send',
  })
}

const Basket = () => {
  const { userId } = useParams()
  const [wasMadeAnOrder, setWasMadeAnOrder] = useState(false)
  const [tableNumber, setTableNumber] = useState('')
  const [orderComment, setOrderComment] = useState('')
  const dispatch = useDispatch()
  const order = useSelector(orderSelectors.order)
  const { defaultCurrency } = useSelector(appSelectors.settings)

  const addCountToPosition = (dishId: string) => {
    const selectedDish = order.items.find((el: any) => el.item.id === dishId)
    dispatch(orderActions.addItem(selectedDish.item))
  }

  const removeCountToPosition = (dishId: string) => {
    const selectedDish = order.items.find((el: any) => el.item.id === dishId)
    dispatch(orderActions.deleteItem(selectedDish.item))
  }

  const clearCart = () => {
    dispatch(orderActions.clearCart())
  }

  const sendOrder = () => {
    if (tableNumber === '') {
      return message.warning('Field table number is required')
    }
    const newOrder = {
      userId: userId,
      totalPrice: order.totalPrice,
      items: order.items,
      tableNumber: tableNumber,
      comment: orderComment,
      currency: defaultCurrency,
    }
    saveOrder(newOrder)
    setTableNumber('')
    setOrderComment('')
    openNotificationWithIcon()
    setWasMadeAnOrder(true)
  }

  const clearOrderHistory = () => {
    clearCart()
    setWasMadeAnOrder(false)
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Quantity',
      dataIndex: 'Quantity',
      key: 'Quantity',
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button shape="circle" onClick={() => addCountToPosition(record.key)}>
            +
          </Button>
          <Button shape="circle" onClick={() => removeCountToPosition(record.key)}>
            -
          </Button>
        </Space>
      ),
    },
  ]

  const tableColumns = columns.map((column: any) => {
    if (wasMadeAnOrder) {
      return column.title !== 'Action' ? column : {}
    }
    return column
  })

  const dataSource = useMemo(
    () =>
      order.items.map((el: any) => ({
        key: el.item.id,
        Title: el.item.title,
        Quantity: el.quantity,
        Price: el.item.priceValue ? el.item.priceValue : 'free',
      })),
    [order.items],
  )

  if (!order.items.length) {
    return <Empty />
  }

  return (
    <>
      <Title level={4}>{wasMadeAnOrder ? 'Your order info' : 'Your order'}</Title>
      <Table dataSource={dataSource} columns={tableColumns} pagination={false} />
      <Title level={5} className="order__totalPrice">
        Total price: {order.totalPrice} {defaultCurrency}
      </Title>
      {!wasMadeAnOrder ? (
        <>
          <Title level={5}>Your table number</Title>
          <Input
            placeholder="add table number"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          />
          <Title level={5}>Your comment on the order</Title>
          <TextArea
            rows={3}
            value={orderComment}
            onChange={(e) => setOrderComment(e.target.value)}
          />
          <div className="basket-footer">
            <Button type="primary" size={'large'} shape="round" onClick={() => sendOrder()}>
              Place order
            </Button>
            <Button type="primary" size={'large'} shape="round" onClick={() => clearCart()}>
              Clear order
            </Button>
          </div>
        </>
      ) : (
        <Button type="primary" size={'large'} shape="round" onClick={() => clearOrderHistory()}>
          Clear basket info
        </Button>
      )}
    </>
  )
}

export default Basket
