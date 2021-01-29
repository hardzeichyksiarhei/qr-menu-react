const Menu = require('./menu.model')

exports.getAll = async (userId) => {
  const menus = await Menu.find({ userId })
  return menus
}

exports.getById = async (menuId) => {
  const menu = await Menu.findById(menuId)
  return menu
}

exports.create = async (menu) => new Menu(menu).save()

exports.update = async ({ id, userId, ...payload }) => {
  const menu = Menu.findOneAndUpdate({ _id: id }, payload, { new: true })
  return menu
}

exports.updateById = async (menuId, data) => {
  const menu = await Menu.findOneAndUpdate({ _id: menuId }, data)
  return menu
}

exports.deleteById = async (menuId) => {
  const status = await Menu.findOneAndDelete({ _id: menuId })
  return status
}
