const { Schema, Types, model } = require('mongoose')

const imageSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User' },
    nativeFileName: { type: String, default: '' },
    nativeFileSize: { type: Number, default: 0 },
    title: { type: String, default: 'Image title' },
    sizes: { type: Object },
  },
  { timestamps: true },
)

imageSchema.virtual('id').get(function () {
  // eslint-disable-next-line no-underscore-dangle
  return this._id.toHexString()
})

imageSchema.set('toJSON', { virtuals: true })

imageSchema.methods.toResponse = function toResponse() {
  const { id, userId, sizes } = this
  return { id, userId, sizes }
}

const Image = model('Image', imageSchema)

module.exports = Image
