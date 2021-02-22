const Image = require('./image.model')

exports.getAll = async (userId) => {
  const images = await Image.find({ userId }).sort({ createdAt: 'desc' })
  return images
}

exports.create = async (image) => new Image(image).save()

exports.deleteById = async (imageId) => {
  const status = await Image.findOneAndDelete({ _id: imageId })
  return status
}
