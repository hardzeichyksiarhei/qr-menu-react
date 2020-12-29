const { Router } = require('express')

const router = Router()
const { check } = require('express-validator')
const controller = require('../controllers/auth')

router.post(
  '/register',
  [
    check('email', 'login is not email').isEmail(),
    check('password', 'Invalid password').isLength({ min: 6 }),
  ],
  controller.register,
)
router.post('/login', controller.login)
module.exports = router
