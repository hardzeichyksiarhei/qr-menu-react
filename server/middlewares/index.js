const auth = require('./auth')
const role = require('./role')
const validate = require('./validate')
const httpLogger = require('./httpLogger')
const errorLogger = require('./errorLogger')

module.exports = {
  auth,
  role,
  validate,
  httpLogger,
  errorLogger,
}
