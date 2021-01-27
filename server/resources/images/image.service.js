const Image = require('./image.model')

exports.getAll = async (userId) => {
  const images = await Image.find({ userId })
  return images
}

exports.create = async (image) => new Image(image).save()
