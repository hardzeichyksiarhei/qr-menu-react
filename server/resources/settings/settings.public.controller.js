const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')

const settingsService = require('./settings.service')

module.exports.getFieldsByUserId = catchErrors(async (req, res) => {
  const { userId } = req.query
  const { fields } = req.body

  const settings = await settingsService.getFieldsByUserId(userId, fields)
  return res.status(StatusCodes.OK).json(settings)
})
