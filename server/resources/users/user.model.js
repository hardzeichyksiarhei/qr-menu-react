const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Schema, model } = require('mongoose')

const { JWT_SECRET_KEY } = require('../../helpers/config')

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: 'Role' }],
})

userSchema.virtual('id').get(function virtualId() {
  // eslint-disable-next-line no-underscore-dangle
  return this._id.toHexString()
})

userSchema.set('toJSON', { virtuals: true })

/* Events */

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

/* Methods */

userSchema.methods.generateAuthToken = async function () {
  const { id, email, roles } = this
  const token = jwt.sign({ userId: id, email, roles }, JWT_SECRET_KEY, {
    expiresIn: '1h',
  })
  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  // eslint-disable-next-line no-use-before-define
  const user = await User.findOne({ email })
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!user || !isPasswordMatch) return null
  return user
}

userSchema.methods.toResponse = function toResponse() {
  const { id, email } = this
  return { id, email }
}

const User = model('User', userSchema)

module.exports = User
