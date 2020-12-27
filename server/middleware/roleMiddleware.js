const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (roles) {
  // eslint-disable-next-line consistent-return
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }

    try {
      const token = req.headers.authorization
      if (!token) {
        return res.status(403).json({ message: 'not authorized' })
      }
      const { roles: userRoles } = jwt.verify(token, config.get('jwt-secret'))
      let hasRole = false
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true
        }
      })

      if (!hasRole) {
        return res.status(403).json({ message: 'not eligible for this role' })
      }
      next()
    } catch (e) {
      return res.status(403).json({ message: e.message })
    }
  }
}
