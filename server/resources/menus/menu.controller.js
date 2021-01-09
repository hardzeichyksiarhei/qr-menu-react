const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const { JWT_SECRET_KEY } = require('../../helpers/config')

const catchErrors = require('../../helpers/catchErrors')

const menuService = require('./menu.service')

module.exports.getAll = catchErrors(async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Not authorized' })
  }
  const { userId } = jwt.verify(token, JWT_SECRET_KEY)

  const menus = await menuService.getAll(userId)
  return res.status(StatusCodes.OK).json(menus)
})

module.exports.save = catchErrors(async (req, res) => {
  const { menu } = req.body
  await menuService.create(menu)

  return res.status(StatusCodes.CREATED).json({ message: 'Menu was created' })
})
