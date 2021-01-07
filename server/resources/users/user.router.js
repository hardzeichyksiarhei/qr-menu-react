const router = require('express').Router()
const UsersController = require('./user.controller')

// const { validate } = require('express-validation');

// const UserValidation = require('./user.validator')

router.route('/current').get([UsersController.getAuthUser])

module.exports = router
