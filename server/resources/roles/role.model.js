const { Schema, model } = require('mongoose')

const roleSchema = new Schema({
  value: { type: String, unique: true, default: 'supplier' },
})

const Role = model('Role', roleSchema)

module.exports = Role
