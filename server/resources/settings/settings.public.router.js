const router = require('express').Router()

const { validate } = require('../../middlewares')

const SettingsPublicController = require('./settings.public.controller')
const SettingsPublicValidator = require('./settings.public.validator')

router
  .route('/')
  .post([
    SettingsPublicValidator.getFieldsByUserId(),
    validate,
    SettingsPublicController.getFieldsByUserId,
  ])

module.exports = router
