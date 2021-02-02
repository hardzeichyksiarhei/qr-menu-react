const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')

const menuService = require('./menu.service')

module.exports.getAllByUserId = catchErrors(async (req, res) => {
  const { userId } = req.query

  const menus = await menuService.getAll(userId, { isPublished: true, deletedAt: null })
  return res.status(StatusCodes.OK).json(menus)
})
