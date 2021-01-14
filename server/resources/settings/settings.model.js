const { Schema, Types, model } = require('mongoose')

const regionSettingsSchema = new Schema({
  country: { type: String, default: null },
  currency: { type: String, default: null },
  time: { type: Number, default: 24 },
})

const supplierSchema = new Schema({
  restaurantName: { type: String, default: null },
  companyName: { type: String, default: null },
  phone: { type: String, default: null },
  website: { type: String, default: null },
})

const settingsSchema = new Schema({
  id: { type: Types.ObjectId, required: true },
  regionSettings: { type: regionSettingsSchema, default: null },
  supplier: { type: supplierSchema, default: null },
})

const Settings = model('Settings', settingsSchema)

module.exports = Settings
