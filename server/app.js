const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth'))

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
