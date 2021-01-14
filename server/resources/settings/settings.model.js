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

const settingsSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User' },
    regionSettings: { type: regionSettingsSchema, default: () => ({}) },
    supplierSettings: { type: supplierSchema, default: () => ({}) },
  },
  { timestamps: true },
)

const Settings = model('Settings', settingsSchema)

module.exports = Settings
