const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const { JWT_SECRET_KEY } = require('../helpers/config')

module.exports = (roles) => (req, res, next) => {
  if (req.method === 'OPTIONS') return next()

  try {
    const token = req.headers.Authorization
    if (!token) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: 'Not authorized' })
    }
    const { roles: userRoles } = jwt.verify(token, JWT_SECRET_KEY)
    let hasRole = false
    userRoles.forEach((role) => {
      if (roles.includes(role)) hasRole = true
    })

    if (!hasRole) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: 'Not eligible for this role' })
    }

    return next()
  } catch (e) {
    return res.status(StatusCodes.FORBIDDEN).json({ message: e.message })
  }
}
