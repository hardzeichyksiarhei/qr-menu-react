const { Schema, Types, model } = require('mongoose')

const photoSchema = new Schema({
  name: { type: String },
})

const categorySchema = new Schema({
  title: { type: String },
  isVisible: { type: Boolean },
  photo: { type: photoSchema, default: null },
})

const menuSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
    title: { type: String, default: 'New menu' },
    internalComment: { type: String },
    photo: { type: photoSchema, default: null },
    categories: [{ type: categorySchema }],
    priceCurrency: { type: String, default: null },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
)

const Menu = model('Menu', menuSchema)

module.exports = Menu
