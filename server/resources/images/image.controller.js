const { StatusCodes } = require('http-status-codes')

const uploadFile = require('../../middlewares/upload.image')
const resizeImage = require('../../middlewares/resize.image')

const catchErrors = require('../../helpers/catchErrors')
const imageService = require('./image.service')

exports.upload = catchErrors(async (req, res, next) => {
  await uploadFile(req, res)
  const image = await resizeImage(req, res, next)

  const savedImage = await imageService.create(image)
  return res.status(StatusCodes.OK).json(savedImage.toResponse())
})
