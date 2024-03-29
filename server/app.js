const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const http = require('http').createServer(app)
const SocketIO = require('socket.io')

const { auth, httpLogger, errorLogger } = require('./middlewares')
const i18n = require('./i18n')

const { CLIENT_URL, ADMIN_URL } = require('./helpers/config')

const authRouter = require('./resources/auth/auth.router')
const userRouter = require('./resources/users/user.router')
const menuRouter = require('./resources/menus/menu.router')
const settingsRouter = require('./resources/settings/settings.router')
const ordersRouter = require('./resources/orders/orders.router')
const ImageRouter = require('./resources/images/image.router')

const menuPublicRouter = require('./resources/menus/menu.public.router')
const QRCodePublicRouter = require('./resources/qr-code/qr-code.public.router')
const ordersPublicRouter = require('./resources/orders/orders.public.router')
const settingsPublicRouter = require('./resources/settings/settings.public.router')

const io = SocketIO(http, {
  cors: {
    origin: [CLIENT_URL, ADMIN_URL],
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('ROOM:JOIN', (userId) => {
    socket.join(userId)
  })
  socket.on('ROOM:LEAVE', (userId) => {
    socket.leave(userId)
  })
})

app.use((req, res, next) => {
  req.io = io
  next()
})

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

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(httpLogger)

app.use('/api/auth', authRouter)

app.use('/api/public/menus', menuPublicRouter)
app.use('/api/public/qr-code', QRCodePublicRouter)
app.use('/api/public/orders', ordersPublicRouter)
app.use('/api/public/settings', settingsPublicRouter)

app.use('/api/users', auth, userRouter)
app.use('/api/menus', auth, menuRouter)
app.use('/api/settings', auth, settingsRouter)
app.use('/api/orders', auth, ordersRouter)
app.use('/api/images', auth, ImageRouter)

app.use(errorLogger)

module.exports = http
