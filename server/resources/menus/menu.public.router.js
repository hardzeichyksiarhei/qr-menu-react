const router = require('express').Router()
const MenuPublicController = require('./menu.public.controller')

router.route('/').get(MenuPublicController.getAllByUserId)

module.exports = router
