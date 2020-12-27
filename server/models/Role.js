const { Schema, model } = require('mongoose')

const Role = new Schema({
  value: { type: String, unique: true, default: 'user' },
})

module.exports = model('Role', Role)
