const { Types } = require('mongoose')
const { StatusCodes } = require('http-status-codes')
const catchErrors = require('../../helpers/catchErrors')
const Orders = require('./orders.model')

module.exports.getAll = catchErrors(async (req, res) => {
  const { id: userId } = req.user

  const orders = await Orders.find({ userId })

  if (orders) {
    orders.reverse()
  }

  return res.status(StatusCodes.OK).json(orders)
})

module.exports.getById = catchErrors(async (req, res) => {
  const { orderId } = req.params

  const order = await Orders.findById(orderId)
  return res.status(StatusCodes.OK).json(order)
})

module.exports.save = catchErrors(async (req, res) => {
  // eslint-disable-next-line object-curly-newline
  const { userId, tableNumber, list, totalPrice } = req.body

  const createdOrder = await new Orders({
    userId,
    tableNumber,
    list,
    totalPrice,
  }).save()

  return res
    .status(StatusCodes.CREATED)
    .json({ orderId: createdOrder.id, message: 'order was created' })
})

module.exports.deleteById = catchErrors(async (req, res) => {
  const { orderId } = req.params

  const order = await Orders.findOneAndDelete({ _id: orderId })
  return res.status(StatusCodes.OK).json(order)
})

module.exports.updateById = catchErrors(async (req, res) => {
  const { orderId } = req.params
  const { data } = req.body

  const order = await Orders.findOneAndUpdate({ _id: orderId }, data)
  return res.status(StatusCodes.OK).json(order)
})

module.exports.getOrdersForChart = catchErrors(async (req, res) => {
  const { id: userId } = req.user

  const orders = await Orders.aggregate([
    {
      $match: { userId: { $eq: Types.ObjectId(userId) } },
    },
    {
      $group: {
        _id: '$orderDate',
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        date: '$_id',
        count: '$count',
      },
    },
    { $sort: { date: 1 } },
  ])

  return res.status(StatusCodes.OK).json(orders)
})
