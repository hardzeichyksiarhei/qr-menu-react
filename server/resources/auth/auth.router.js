const router = require('express').Router()

const { validate } = require('../../middlewares')

const AuthController = require('./auth.controller')
const AuthValidator = require('./auth.validator')

router.route('/login').post([AuthValidator.login(), validate, AuthController.login])
router.route('/register').post([AuthValidator.register(), validate, AuthController.register])

module.exports = router
