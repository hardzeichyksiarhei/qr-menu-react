const router = require('express').Router()
const OrdersContoller = require('./orders.public.controller')

router.route('/').post(OrdersContoller.save)

module.exports = router
