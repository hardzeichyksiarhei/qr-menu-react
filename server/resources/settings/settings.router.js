const router = require('express').Router()
const SettingsController = require('./settings.controller')

router.route('/').get(SettingsController.getSettings)
router.route('/').post(SettingsController.save)

module.exports = router
