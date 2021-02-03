const { Types } = require('mongoose')
const { StatusCodes } = require('http-status-codes')
const catchErrors = require('../../helpers/catchErrors')
const Orders = require('./orders.model')

module.exports.save = catchErrors(async (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { userId, tableNumber, items, totalPrice, comment } = req.body

  const ordersById = await Orders.find({ userId })

  const maxOrder = ordersById ? ordersById.length : 0

  const createdOrder = await new Orders({
    orderNumber: maxOrder + 1,
    userId,
    tableNumber,
    items,
    totalPrice,
    comment,
  }).save()

  req.io.to(userId).emit('ROOM:ADD_ORDER', createdOrder)

  return res
    .status(StatusCodes.CREATED)
    .json({ orderId: createdOrder.id, message: 'Order was created' })
})

module.exports.getOrdersForChart = catchErrors(async (req, res) => {
  const { userId } = req.query

  const orders = await Orders.aggregate([
    {
      $match: { userId: { $eq: Types.ObjectId(userId) } },
    },
    {
      $group: {
        _id: '$orderDate',
        secondary: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        primary: '$_id',
        secondary: '$secondary',
      },
    },
  ])

  return res.status(StatusCodes.OK).json(orders)
})
