const router = require('express').Router()
const UserController = require('./user.controller')

router.route('/current').get([UserController.getAuthUser])

module.exports = router
