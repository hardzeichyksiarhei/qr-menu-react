const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const User = require('../models/User')
const Role = require('../models/Role')

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  }
  return jwt.sign(payload, config.get('jwt-secret'), {
    expiresIn: '1h',
  })
}

module.exports.register = async function (req, res) {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: 'Invalid data' })
    }
    const { username, password } = req.body

    const candidate = await User.findOne({ username })

    if (candidate) {
      return res.status(409).json({
        message: 'User with this login already exists',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const userRole = await Role.findOne({ value: 'user' })
    const user = new User({
      username,
      password: hashedPassword,
      roles: [userRole.value],
    })

    await user.save()
    return res.status(201).json({ message: 'User was created' })
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}

module.exports.login = async function (req, res) {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if (!user) {
      return res
        .status(400)
        .json({ message: 'User with this login does not exist' })
    }

    const isMatchPassword = await bcrypt.compare(password, user.password)

    if (!isMatchPassword) {
      return res.status(400).json({ message: 'Invalid password' })
    }
    const token = generateAccessToken(user.id, user.roles)
    return res.status(200).json({ token })
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
