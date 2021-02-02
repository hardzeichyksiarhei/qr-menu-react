const { Schema, Types, model } = require('mongoose')

const orderPosition = new Schema({
  title: { type: String },
  priceValue: { type: Number },
  quantity: { type: Number },
})

const ordersSchema = new Schema(
  {
    orderNumber: { type: Number },
    userId: { type: Types.ObjectId, ref: 'User' },
    tableNumber: { type: Number },
    list: [{ type: orderPosition }],
    status: { type: String, default: 'New' },
    totalPrice: { type: Number },
    comment: { type: String },
  },
  {
    timestamps: true,
  },
)

const Orders = model('Orders', ordersSchema)

module.exports = Orders
