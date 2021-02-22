const { Schema, Types, model } = require('mongoose')

const photoSchema = new Schema({
  userId: { type: Types.ObjectId },
  sizes: { type: Object },
})

const ratingSchema = new Schema({
  key: Number,
  value: { type: Number, default: 0 },
})

const dishSchema = new Schema({
  title: { type: String },
  photo: { type: photoSchema, default: null },
  description: { type: String },
  isPublished: { type: Boolean },
  isEnabledToOrder: { type: Boolean },
  priceValue: { type: Number, default: null },
  ingredients: [String],
  allergens: [{ type: new Schema({ number: Number, label: String }), default: [] }],
  tags: [{ type: new Schema({ id: Number, icon: String, label: String }), default: [] }],
  rating: [{ type: ratingSchema, default: [] }],
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
    isPublished: { type: Boolean, default: true },
    isEnabledToOrder: { type: Boolean, default: true },
    isPriceVisible: { type: Boolean, default: true },
    isEnergyVisible: { type: Boolean, default: true },
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

photoSchema.set('toJSON', { virtuals: true })
dishSchema.set('toJSON', { virtuals: true })
categorySchema.set('toJSON', { virtuals: true })
menuSchema.set('toJSON', { virtuals: true })

const Menu = model('Menu', menuSchema)

module.exports = Menu
