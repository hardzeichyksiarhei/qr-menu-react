const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports.getUser = async function (req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(403).json({ message: 'not authorized' })
    }
    const { id } = jwt.verify(token, config.get('jwt-secret'))
    const user = await User.findOne({ _id: id })
    return res.status(200).json(user)
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
