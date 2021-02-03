const router = require('express').Router()
const OrdersContoller = require('./orders.controller')

router.route('/chart').get(OrdersContoller.getOrdersForChart)
router.route('/').get(OrdersContoller.getAll)
router.route('/:orderId').get(OrdersContoller.getById)
router.route('/').post(OrdersContoller.save)
router.route('/:orderId').delete(OrdersContoller.deleteById)
router.route('/:orderId').patch(OrdersContoller.updateById)

module.exports = router
