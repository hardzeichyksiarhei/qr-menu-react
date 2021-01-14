const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')

const settingsService = require('./settings.service')

module.exports.getSettings = catchErrors(async (req, res) => {
  const { id: UserId } = req.user

  const settings = await settingsService.getSettings(UserId)
  return res.status(StatusCodes.OK).json(settings)
})

module.exports.save = catchErrors(async (req, res) => {
  const { settings } = req.body
  await settingsService.save(settings)

  return res.status(StatusCodes.CREATED).json({ message: 'Settings was updated' })
})
