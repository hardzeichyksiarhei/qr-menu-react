const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')
const userService = require('./user.service')

exports.getAuthUser = catchErrors(async (req, res) => {
  const { id: userId } = req.user

  const user = await userService.findById(userId)
  return res.status(StatusCodes.OK).json(user.toResponse())
})
