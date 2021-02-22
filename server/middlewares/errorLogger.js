/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes')
const ValidateError = require('../classes/validation-error.class')

const logger = require('../helpers/logger')

module.exports = (error, req, res, next) => {
  if (error instanceof ValidateError) {
    logger.error(`${error.statusCode} ${error.name} ${error.message}`)
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
  }

  logger.error(`${error.message}\n${error.stack}`)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
}
