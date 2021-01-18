const Settings = require('./settings.model')

exports.getByUserId = async (userId) => {
  const settings = await Settings.findOne({ userId })
  return settings
}

exports.create = async (payload) => new Settings(payload).save()

exports.update = async (userId, payload) => {
  const settings = Settings.findOneAndUpdate({ userId }, payload, { new: true })
  return settings
}
