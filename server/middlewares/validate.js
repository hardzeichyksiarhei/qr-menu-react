const { validationResult } = require('express-validator')
const ValidateError = require('../classes/validation-error.class')

module.exports = (req, res, next) => {
  const { errors } = validationResult(req)

  if (!errors.length) return next()

  const error = errors.pop()

  return next(new ValidateError(error.msg))
}
