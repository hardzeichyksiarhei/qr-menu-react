const router = require('express').Router()

const { validate } = require('../../middlewares')

const AuthController = require('./auth.controller')
const AuthValidator = require('./auth.validator')

router.route('/login').post([validate(AuthValidator.login), AuthController.login])
router.route('/register').post([validate(AuthValidator.register), AuthController.register])

module.exports = router
