const Menu = require('../models/Menu')

module.exports.save = async function (req, res) {
  try {
    const { menu } = req.body

    const menuInstance = new Menu(menu)

    await menuInstance.save()
    return res.status(201).json({ message: 'Menu was created' })
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}

module.exports.getAll = async function (req, res) {
  try {
    const menus = await Menu.find()
    return res.status(201).json(menus)
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
