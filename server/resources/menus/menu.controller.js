const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')

const menuService = require('./menu.service')

module.exports.getAll = catchErrors(async (req, res) => {
  const { id: userId } = req.user

  const menus = await menuService.getAll(userId)
  return res.status(StatusCodes.OK).json(menus)
})

module.exports.getById = catchErrors(async (req, res) => {
  const { menuId } = req.params

  const menu = await menuService.getById(menuId)
  return res.status(StatusCodes.OK).json(menu)
})

module.exports.save = catchErrors(async (req, res) => {
  const { user } = req
  const { menu } = req.body

  if (menu.id) {
    await menuService.update(menu)
    return res.status(StatusCodes.CREATED).json({ message: 'Menu was updated' })
  }

  const createdMenu = await menuService.create({
    ...menu,
    userId: user.id,
  })

  return res
    .status(StatusCodes.CREATED)
    .json({ menuId: createdMenu.id, message: 'Menu was created' })
})

module.exports.deleteById = catchErrors(async (req, res) => {
  const { menuId } = req.params

  const menu = await menuService.deleteById(menuId)
  return res.status(StatusCodes.OK).json(menu)
})
