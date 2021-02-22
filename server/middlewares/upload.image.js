const multer = require('multer')
const util = require('util')

const maxSize = 5 * 1024 * 1024

const storage = multer.memoryStorage()

const uploadFile = multer({
  storage,
  limits: { fileSize: maxSize },
}).single('file')

const uploadFileMiddleware = util.promisify(uploadFile)
module.exports = uploadFileMiddleware
