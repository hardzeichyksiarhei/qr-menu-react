const Menu = require('./menu.model')

exports.getAll = async (userId) => {
  const menus = await Menu.find({ userId })
  return menus
}

exports.save = async (menu) => new Menu(menu).save()
