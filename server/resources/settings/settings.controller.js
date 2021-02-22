const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')

const settingsService = require('./settings.service')

module.exports.getByUserId = catchErrors(async (req, res) => {
  const { user } = req

  const settings = await settingsService.getByUserId(user.id)
  return res.status(StatusCodes.OK).json(settings)
})

module.exports.getFieldsByUserId = catchErrors(async (req, res) => {
  const { user } = req
  const { fields } = req.body

  const settings = await settingsService.getFieldsByUserId(user.id, fields)
  return res.status(StatusCodes.OK).json(settings)
})

module.exports.update = catchErrors(async (req, res) => {
  const { user } = req
  const { settings } = req.body

  await settingsService.update(user.id, settings)

  return res.status(StatusCodes.CREATED).json({ message: 'Settings was updated' })
})
