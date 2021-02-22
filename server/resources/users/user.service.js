const User = require('./user.model')

exports.create = async (user) => {
  const userModel = new User(user)
  return userModel.save()
}

exports.findById = async (id) => {
  const user = await User.findById(id)
  return user
}
