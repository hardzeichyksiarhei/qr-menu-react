const express = require('express')
const cors = require('cors')

const { auth } = require('./middlewares')
const i18n = require('./i18n')

const authRouter = require('./resources/auth/auth.router')
const userRouter = require('./resources/users/user.router')
const menuRouter = require('./resources/menus/menu.router')
const settingsRouter = require('./resources/settings/settings.router')
const QRCodeRouter = require('./resources/qr-code/qr-code.router')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use(i18n.init)

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!')
    return
  }
  next()
})

app.use('/api/auth', authRouter)
app.use('/api/users', auth, userRouter)
app.use('/api/menus', auth, menuRouter)
app.use('/api/settings', auth, settingsRouter)
app.use('/api/qr-code', QRCodeRouter)

module.exports = app
