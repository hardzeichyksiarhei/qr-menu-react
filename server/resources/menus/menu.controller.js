const { StatusCodes } = require('http-status-codes')

const catchErrors = require('../../helpers/catchErrors')
const Menu = require('./menu.model')

const menuService = require('./menu.service')

module.exports.getAll = catchErrors(async (req, res) => {
  const { id: userId } = req.user

  const menus = await menuService.getAll(userId)
  return res.status(StatusCodes.OK).json(menus)
})

module.exports.getById = catchErrors(async (req, res) => {
  const { menuId } = req.params

  const menu = await menuService.getById(menuId)
  return res.status(StatusCodes.OK).json(menu)
})

module.exports.getPopularDishesByUserId = catchErrors(async (req, res) => {
  const { id: userId } = req.user

  const menus = await Menu.find({ userId }).lean()

  const dishes = menus
    .map((menu) => menu.categories)
    .flat()
    .map((category) => category.dishes)
    .flat()
    .map((dish) => {
      const [value1, value2] = dish.rating.reduce(
        (acc, curr) => {
          acc[0] += curr.key * curr.value
          acc[1] += curr.value
          return acc
        },
        [0, 1],
      )
      return {
        ...dish,
        calculateRating: value1 / value2,
      }
    })
    .sort((a, b) => a.calculateRating - b.calculateRating)
    .slice(0, 5)

  return res.status(StatusCodes.OK).json(dishes)
})

module.exports.save = catchErrors(async (req, res) => {
  const { user } = req
  const { menu } = req.body

  if (menu.id) {
    const updatedMenu = await menuService.update(menu)
    return res
      .status(StatusCodes.CREATED)
      .json({ menuId: updatedMenu.id, message: 'Menu was updated' })
  }

  const createdMenu = await menuService.create({
    ...menu,
    userId: user.id,
  })

  return res
    .status(StatusCodes.CREATED)
    .json({ menuId: createdMenu.id, message: 'Menu was created' })
})

module.exports.updateById = catchErrors(async (req, res) => {
  const { menuId } = req.params
  const { data } = req.body

  const menu = await menuService.updateById(menuId, data)
  return res.status(StatusCodes.OK).json(menu)
})

module.exports.deleteById = catchErrors(async (req, res) => {
  const { menuId } = req.params

  const menu = await menuService.deleteById(menuId)
  return res.status(StatusCodes.OK).json(menu)
})
