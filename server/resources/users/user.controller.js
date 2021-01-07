const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const { JWT_SECRET_KEY } = require('../../helpers/config')

const catchErrors = require('../../helpers/catchErrors')
const userService = require('./user.service')

exports.getAuthUser = catchErrors(async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Not authorized' })
  }
  const { userId } = jwt.verify(token, JWT_SECRET_KEY)

  const user = await userService.findById(userId)
  return res.status(StatusCodes.OK).json(user.toResponse())
})
