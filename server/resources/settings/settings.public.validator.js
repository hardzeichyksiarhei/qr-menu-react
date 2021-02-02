const { query } = require('express-validator')

module.exports = {
  getFieldsByUserId: () => [
    query('userId').not().isEmpty().withMessage('The "userId" query param is required.'),
  ],
}
