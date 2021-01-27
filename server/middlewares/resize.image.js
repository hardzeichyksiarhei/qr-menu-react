const path = require('path')
const MulterSharpResizer = require('multer-sharp-resizer')
const uniqid = require('uniqid')

const sizes = [
  {
    path: 'original',
    width: null,
    height: null,
  },
  {
    path: 'large',
    width: 1366,
    height: 768,
  },
  {
    path: 'medium',
    width: 768,
    height: 768,
  },
  {
    path: 'thumbnail',
    width: 300,
    height: 300,
  },
]

const resizeImage = async (req) => {
  const { file } = req
  const { id: userId } = req.user

  const filename = uniqid(undefined, `-${file.originalname}`)

  const uploadPath = path.resolve(__dirname, '..', 'uploads', userId)

  const fileUrl = uploadPath

  const sharpOptions = { fit: 'cover' }

  const resizeObj = new MulterSharpResizer(req, filename, sizes, uploadPath, fileUrl, sharpOptions)

  await resizeObj.resize()

  const getDataUploaded = resizeObj.getData().pop()

  return {
    userId,
    nativeFileName: file.originalname,
    nativeFileSize: file.size,
    sizes: sizes.reduce((acc, curr) => {
      acc[curr.path] = getDataUploaded[curr.path].filename
      return acc
    }, {}),
  }
}

module.exports = resizeImage
