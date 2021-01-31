const { Schema, Types, model } = require('mongoose')

const regionSettingsSchema = new Schema({
  country: { type: String, default: null },
  currency: { type: String, default: null },
  timeFormat: { type: Number, default: 24 },
})

const timeWindowsSchema = new Schema({
  start: { type: String, default: null },
  end: { type: String, default: null },
})

const openHoursSchema = new Schema({
  0: {
    dayCode: { type: String, default: 'Sunday' },
    timeWindows: [{ type: timeWindowsSchema }],
  },
  1: {
    dayCode: { type: String, default: 'Monday' },
  },
  2: {
    dayCode: { type: String, default: 'Tuesday' },
  },
  3: {
    dayCode: { type: String, default: 'Wednesday' },
  },
  4: {
    dayCode: { type: String, default: 'Thursday' },
  },
  5: {
    dayCode: { type: String, default: 'Friday' },
  },
  6: {
    dayCode: { type: String, default: 'Saturday' },
  },
})

const supplierSchema = new Schema({
  restaurantName: { type: String, default: null },
  companyName: { type: String, default: null },
  descShort: { type: String, default: null },
  descLong: { type: String, default: null },
  logo: { type: Object, default: null },
  backgroundImage: { type: Object, default: null },
  phone: { type: String, default: null },
  messenger: { type: String, default: null },
  website: { type: String, default: null },
  address: { type: String, default: null },
  googleMapsLink: { type: String, default: null },
  openHours: { type: openHoursSchema, default: () => ({}) },
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
