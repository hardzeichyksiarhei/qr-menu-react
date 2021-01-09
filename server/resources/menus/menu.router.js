const router = require('express').Router()
const MenuController = require('./menu.controller')

router.route('/').get(MenuController.getAll)
router.route('/').post(MenuController.save)

module.exports = router
