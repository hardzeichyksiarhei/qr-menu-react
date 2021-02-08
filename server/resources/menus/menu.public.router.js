const router = require('express').Router()

const { validate } = require('../../middlewares')

const MenuPublicController = require('./menu.public.controller')
const MenuPublicValidator = require('./menu.public.validator')

router
  .route('/')
  .get([MenuPublicValidator.getAllByUserId(), validate, MenuPublicController.getAllByUserId])

router.route('/rating').patch([MenuPublicController.updateDishRating])

module.exports = router
