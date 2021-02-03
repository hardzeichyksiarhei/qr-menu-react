const router = require('express').Router()
const OrdersContoller = require('./orders.public.controller')

router.route('/').post(OrdersContoller.save)
router.route('/chart').get(OrdersContoller.getOrdersForChart)

module.exports = router
