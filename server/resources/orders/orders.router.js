const router = require('express').Router()
const OrdersContoller = require('./orders.controller')

router.route('/').get(OrdersContoller.getAll)
router.route('/:orderId').get(OrdersContoller.getById)
router.route('/').post(OrdersContoller.save)
router.route('/:orderId').delete(OrdersContoller.deleteById)

module.exports = router
