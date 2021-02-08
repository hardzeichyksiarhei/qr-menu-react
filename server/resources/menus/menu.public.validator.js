const { query } = require('express-validator')

module.exports = {
  getAllByUserId: () => [
    query('userId').not().isEmpty().withMessage('The "userId" query param is required.'),
  ],
  getPopularDishesByUserId: () => [
    query('userId').not().isEmpty().withMessage('The "userId" query param is required.'),
  ],
}
