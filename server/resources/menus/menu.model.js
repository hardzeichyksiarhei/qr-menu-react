const { Schema, Types, model } = require('mongoose')

const photoSchema = new Schema({
  name: { type: String },
})

const dishSchema = new Schema({
  title: { type: String },
  description: { type: String },
  isPublished: { type: Boolean },
  isEnabledToOrder: { type: Boolean },
  priceValue: { type: Number, default: null },
})

const categorySchema = new Schema({
  title: { type: String },
  isVisible: { type: Boolean },
  photo: { type: photoSchema, default: null },
  dishes: [{ type: dishSchema, default: [] }],
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

menuSchema.virtual('id').get(function () {
  // eslint-disable-next-line no-underscore-dangle
  return this._id.toHexString()
})

dishSchema.set('toJSON', { virtuals: true })
categorySchema.set('toJSON', { virtuals: true })
menuSchema.set('toJSON', { virtuals: true })

const Menu = model('Menu', menuSchema)

module.exports = Menu
