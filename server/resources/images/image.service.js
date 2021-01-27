const Image = require('./image.model')

exports.getAll = async (userId) => {
  const images = await Image.find({ userId }).sort({ createdAt: 'desc' })
  return images
}

exports.create = async (image) => new Image(image).save()
