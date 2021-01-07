const User = require('./user.model')

exports.findById = async (id) => {
  const user = await User.findById(id)
  return user
}
