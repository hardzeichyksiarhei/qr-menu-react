const { body } = require('express-validator')

module.exports = {
  login: () => [
    body('email')
      .isEmail()
      .withMessage((_, { req }) => req.__('validation.email')),
    body('password')
      .isLength({ min: 6 })
      .withMessage((_, { req }) => req.__('validation.password.length', { min: 6 })),
  ],
  register: () => [
    body('email')
      .isEmail()
      .withMessage((_, { req }) => req.__('validation.email')),
    body('password')
      .isLength({ min: 6 })
      .withMessage((_, { req }) => req.__('validation.password.length', { min: 6 })),
  ],
}
