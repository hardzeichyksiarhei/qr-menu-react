const { Router } = require('express')

const router = Router()
const { check } = require('express-validator')
const controller = require('../controllers/auth')

router.post(
  '/register',
  [
    check('username', 'Invalid login').isLength({ min: 5 }),
    check('password', 'Invalid password').isLength({ min: 6 }),
  ],
  controller.register,
)
router.post('/login', controller.login)
module.exports = router
