const Settings = require('./settings.model')

exports.getSettings = async (UserId) => {
  const settings = await Settings.find({ UserId })
  console.log(settings)
  return settings
}

// посмотреть, что получает метод save и нужно ли создавать новый объект каждый раз
exports.save = async (settings) => new Settings(settings).save()
