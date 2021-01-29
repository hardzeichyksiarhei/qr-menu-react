const router = require('express').Router()
const MenuController = require('./menu.controller')

router.route('/').get(MenuController.getAll)
router.route('/:menuId').get(MenuController.getById)
router.route('/').post(MenuController.save)
router.route('/:menuId').patch(MenuController.updateById)
router.route('/:menuId').delete(MenuController.deleteById)

module.exports = router
