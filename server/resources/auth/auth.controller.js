const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')
const User = require('../users/user.model')
const Role = require('../roles/role.model')

const userService = require('../users/user.service')
const settingsService = require('../settings/settings.service')

exports.login = catchErrors(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findByCredentials(email, password)
  if (!user) {
    return res.status(StatusCodes.FORBIDDEN).send({
      auth: false,
      error: 'Login failed! Check authentication credentials',
    })
  }
  const token = await user.generateAuthToken()
  return res.status(StatusCodes.OK).json({ auth: true, token, user: user.toResponse() })
})

exports.register = catchErrors(async (req, res) => {
  const { email, password } = req.body

  const candidate = await User.findOne({ email })

  if (candidate) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'User with this login already exists',
    })
  }

  const userRole = await Role.findOne({ value: 'supplier' })

  const user = await userService.create({
    email,
    password,
    roles: [userRole.value],
  })
  await settingsService.create({ userId: user.id })

  return res.status(StatusCodes.CREATED).json({ message: 'User was created' })
})
