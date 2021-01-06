const { Router } = require('express')

const router = Router()
const controller = require('../controllers/menu')

router.post('/', controller.save)
router.get('/', controller.getAll)
module.exports = router
