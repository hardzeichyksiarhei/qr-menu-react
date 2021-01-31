const Settings = require('./settings.model')

exports.getByUserId = async (userId) => {
  const settings = await Settings.findOne({ userId })
  return settings
}

exports.getFieldsByUserId = async (userId, fields = []) => {
  const settings = await Settings.findOne({ userId }).select(fields.join(' '))
  return settings
}

exports.create = async (payload) => new Settings(payload).save()

exports.update = async (userId, payload) => {
  console.log(payload)
  const settings = Settings.findOneAndUpdate({ userId }, payload, { new: true })
  console.log(settings.supplierSettings)
  return settings
}
