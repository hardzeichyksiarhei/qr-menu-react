const router = require('express').Router()
const SettingsController = require('./settings.controller')

router.route('/').get(SettingsController.get)
router.route('/').patch(SettingsController.update)

module.exports = router
