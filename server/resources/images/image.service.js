const Image = require('./image.model')

exports.create = async (image) => new Image(image).save()
