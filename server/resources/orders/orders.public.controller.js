const { StatusCodes } = require('http-status-codes')
const dateFormat = require('dateformat')
const catchErrors = require('../../helpers/catchErrors')
const Orders = require('./orders.model')

module.exports.save = catchErrors(async (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { userId, tableNumber, items, totalPrice, comment } = req.body

  const ordersById = await Orders.find({ userId })

  const maxOrder = ordersById ? ordersById.length : 0

  const date = dateFormat(new Date(), 'yyyy-mm-dd')

  const createdOrder = await new Orders({
    orderNumber: maxOrder + 1,
    userId,
    tableNumber,
    items,
    totalPrice,
    comment,
    orderDate: date,
  }).save()

  req.io.to(userId).emit('ROOM:ADD_ORDER', createdOrder)

  return res
    .status(StatusCodes.CREATED)
    .json({ orderId: createdOrder.id, message: 'order was created' })
})
