const { StatusCodes } = require('http-status-codes')
const catchErrors = require('../../helpers/catchErrors')
const Orders = require('./orders.model')

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
