const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')
const User = require('../users/user.model')
const Role = require('../roles/role.model')

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
  try {
    const { email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'User with this login already exists',
      })
    }

    const userRole = await Role.findOne({ value: 'supplier' })
    const user = new User({
      email,
      password,
      roles: [userRole.value],
    })

    await user.save()
    return res.status(201).json({ message: 'User was created' })
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
})
