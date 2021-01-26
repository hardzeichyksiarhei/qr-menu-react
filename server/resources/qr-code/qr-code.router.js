const router = require('express').Router()
const QRCodeController = require('./qr-code.controller')

router.route('/users/:userId').get(QRCodeController.getByUserId)

module.exports = router
