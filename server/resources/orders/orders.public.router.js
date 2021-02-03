const router = require('express').Router()
const OrdersPublicContoller = require('./orders.public.controller')

router.route('/').post(OrdersPublicContoller.save)

module.exports = router
