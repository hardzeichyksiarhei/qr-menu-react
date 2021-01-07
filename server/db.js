const mongoose = require('mongoose')

const { MONGO_CONNECTION_STRING } = require('./helpers/config')

const User = require('./resources/users/user.model')
const Role = require('./resources/roles/role.model')

const connectDb = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })

const models = { User, Role }

exports.connectDb = connectDb

exports.models = models
