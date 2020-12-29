const { Router } = require('express')

const router = Router()
const controller = require('../controllers/user')

router.get('/', controller.getUser)

module.exports = router
