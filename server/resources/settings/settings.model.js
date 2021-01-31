const { Schema, Types, model } = require('mongoose')

const regionSettingsSchema = new Schema({
  country: { type: String, default: null },
  currency: { type: String, default: 'USD' },
  timeFormat: { type: Number, default: 24 },
})

const timeWindowsSchema = new Schema({
  start: { type: String, default: null },
  end: { type: String, default: null },
})

const dayHourSchema = new Schema({
  day: Number,
  dayCode: String,
  timeWindows: [{ type: timeWindowsSchema, default: [] }],
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
  openHours: [{ type: dayHourSchema, default: [] }],
})

supplierSchema.pre('save', function (next) {
  if (this.openHours.length === 0) {
    this.openHours = [
      { day: 0, dayCode: 'sun' },
      { day: 1, dayCode: 'mon' },
      { day: 2, dayCode: 'tue' },
      { day: 3, dayCode: 'wed' },
      { day: 4, dayCode: 'thu' },
      { day: 5, dayCode: 'fri' },
      { day: 6, dayCode: 'sat' },
    ]
  }
  next()
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
