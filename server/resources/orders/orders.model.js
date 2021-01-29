const { Schema, Types, model } = require('mongoose')

const orderPosition = new Schema({
  name: { type: String },
  cost: { type: Number },
  quantity: { type: Number },
})

const ordersSchema = new Schema({
  orderNumber: { type: Number },
  userId: { type: Types.ObjectId, ref: 'User' },
  tableNumber: { type: Number },
  list: [{ type: orderPosition }],
  status: { type: String, default: 'New' },
  totalPrice: { type: Number },
})

const Orders = model('Orders', ordersSchema)

module.exports = Orders
