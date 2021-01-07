const { StatusCodes } = require('http-status-codes')

module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body)
  const valid = error == null

  if (valid) return next()

  const { details } = error
  const message = details.map((i) => i.message).join(',')

  return res.status(StatusCodes.BAD_REQUEST).json({ message })
}
