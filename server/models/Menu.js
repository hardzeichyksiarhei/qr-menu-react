const { Schema, model } = require('mongoose')

const Photo = new Schema({
  name: { type: String },
})

const Category = new Schema({
  title: { type: String },
  visibility: { type: Boolean },
  photo: { type: Photo, default: null },
})

const Menu = new Schema({
  // userId: { type: Types.ObjectId, unique: true, required: true },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
  title: { type: String, default: 'New menu' },
  internalComment: { type: String },
  photo: { type: Photo, default: null },
  categories: [{ type: Category }],
  priceCurrency: { type: String, default: null },
  createdAt: { type: Date, default: null },
  deletedAt: { type: Date, default: null },
})

module.exports = model('Menu', Menu)
