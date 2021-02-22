const router = require('express').Router()
const ImageController = require('./image.controller')

router.route('/').get([ImageController.getAll])
router.route('/upload').post([ImageController.upload])
router.route('/:imageId').delete([ImageController.deleteById])

module.exports = router
