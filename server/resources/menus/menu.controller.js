const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')

const menuService = require('./menu.service')

module.exports.getAll = catchErrors(async (req, res) => {
  const { id: userId } = req.user

  const menus = await menuService.getAll(userId)
  return res.status(StatusCodes.OK).json(menus)
})

module.exports.save = catchErrors(async (req, res) => {
  const { menu } = req.body
  await menuService.save(menu)

  return res.status(StatusCodes.CREATED).json({ message: 'Menu was created' })
})
