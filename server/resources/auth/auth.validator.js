const Joi = require('joi')

module.exports = {
  // POST /register
  register: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
}
