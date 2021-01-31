const { StatusCodes } = require('http-status-codes')
const catchErrors = require('../../helpers/catchErrors')
const Orders = require('./orders.model')

module.exports.save = catchErrors(async (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { userId, tableNumber, list, totalPrice } = req.body

  const ordersById = await Orders.find({ userId })

  const maxOrder = ordersById ? ordersById.length : 0

  const createdOrder = await new Orders({
    orderNumber: maxOrder + 1,
    userId,
    tableNumber,
    list,
    totalPrice,
  }).save()

  req.io.to(userId).emit('ROOM:ADD_ORDER', createdOrder)

  return res
    .status(StatusCodes.CREATED)
    .json({ orderId: createdOrder.id, message: 'order was created' })
})
