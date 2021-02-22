class ValidateError extends Error {
  constructor(...params) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidateError)
    }

    this.name = 'ValidateError'
    this.statusCode = 400
  }
}

module.exports = ValidateError
