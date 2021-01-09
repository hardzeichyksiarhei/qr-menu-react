const { Schema, Types, model } = require('mongoose')

const photoSchema = new Schema({
  name: { type: String },
})

const categorySchema = new Schema({
  title: { type: String },
  visibility: { type: Boolean },
  photo: { type: photoSchema, default: null },
})

const menuSchema = new Schema({
  userId: { type: Types.ObjectId, required: true },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
  title: { type: String, default: 'New menu' },
  internalComment: { type: String },
  photo: { type: photoSchema, default: null },
  categories: [{ type: categorySchema }],
  priceCurrency: { type: String, default: null },
  createdAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
})

const Menu = model('Menu', menuSchema)

module.exports = Menu
