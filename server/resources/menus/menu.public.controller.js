const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')
const Menu = require('./menu.model')

const menuService = require('./menu.service')

module.exports.getAllByUserId = catchErrors(async (req, res) => {
  const { userId } = req.query

  const menus = await menuService.getAll(userId, { isPublished: true, deletedAt: null })
  return res.status(StatusCodes.OK).json(menus)
})

module.exports.updateDishRating = catchErrors(async (req, res) => {
  const {
    ids: { menuId, categoryId, dishId },
    rating,
  } = req.body

  await Menu.findOneAndUpdate(
    { _id: menuId },
    { $inc: { 'categories.$[category].dishes.$[dish].rating.$[rating].value': 1 } },
    {
      arrayFilters: [
        { 'category._id': categoryId },
        { 'dish._id': dishId },
        { 'rating.key': rating },
      ],
    },
  )

  return res.status(StatusCodes.OK).json({ message: 'Rating was updated' })
})
