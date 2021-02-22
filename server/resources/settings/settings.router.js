const router = require('express').Router()
const SettingsController = require('./settings.controller')

router.route('/').get(SettingsController.getByUserId)
router.route('/').post(SettingsController.getFieldsByUserId)
router.route('/').patch(SettingsController.update)

module.exports = router
