const { Schema, Types, model } = require('mongoose')

const { dishSchema } = require('../menus/menu.model')

console.log(dishSchema)

const orderPosition = new Schema({
  item: [{ type: dishSchema, default: [] }],
  quantity: { type: Number },
})

const ordersSchema = new Schema(
  {
    orderNumber: { type: Number },
    userId: { type: Types.ObjectId, ref: 'User' },
    tableNumber: { type: Number },
    items: [{ type: orderPosition }],
    status: { type: String, default: 'New' },
    totalPrice: { type: Number },
    comment: { type: String },
    currency: { type: String },
  },
  {
    timestamps: true,
  },
)

const Orders = model('Orders', ordersSchema)

module.exports = Orders
