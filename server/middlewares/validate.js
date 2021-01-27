const { StatusCodes } = require('http-status-codes')
const { validationResult } = require('express-validator')

module.exports = (req, res, next) => {
  const { errors } = validationResult(req)

  if (!errors.length) return next()

  const error = errors.pop()

  return res.status(StatusCodes.BAD_REQUEST).json({ message: error.msg })
}
