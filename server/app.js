const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('config')

const app = express()

app.use(cors())
app.use(express.json({ extended: true }))

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!')
    return
  }
  next()
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/user', require('./routes/user'))
app.use('/api/menu', require('./routes/menu'))

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose
      .connect(config.get('mongoDB'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log('MongoDB connected'))
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  } catch (e) {
    console.log('Server error:', e.message)
    process.exit(1)
  }
}

start()
