const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const User = require('../resources/users/user.model')

const { JWT_SECRET_KEY } = require('../helpers/config')

module.exports = async (req, res, next) => {
  let token = req.header('Authorization')

  if (token && token.indexOf('Bearer ') === 0) {
    token = token.slice(7, token.length)
  }

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      auth: false,
      error: 'Not authorized to access this resource. Auth token is not supplied.',
    })
  }

  try {
    const { userId } = await jwt.verify(token, JWT_SECRET_KEY)

    const user = await User.findById(userId)
    if (!user) {
      throw Error('Not authorized to access this resource. Token is not valid.')
    }

    req.user = { id: userId }
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      auth: false,
      error: error.message,
    })
  }

  return next()
}
