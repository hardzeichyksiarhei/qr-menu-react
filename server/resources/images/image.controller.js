const { StatusCodes } = require('http-status-codes')

const uploadFile = require('../../middlewares/upload.image')
const resizeImage = require('../../middlewares/resize.image')

const catchErrors = require('../../helpers/catchErrors')
const imageService = require('./image.service')

exports.getAll = catchErrors(async (req, res) => {
  const { id: userId } = req.user

  const images = await imageService.getAll(userId)
  return res.status(StatusCodes.OK).json(images.map((image) => image.toResponse()))
})

exports.upload = catchErrors(async (req, res) => {
  await uploadFile(req, res)
  const image = await resizeImage(req, res)

  const savedImage = await imageService.create(image)
  return res.status(StatusCodes.OK).json(savedImage.toResponse())
})
