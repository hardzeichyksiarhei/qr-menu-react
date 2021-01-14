const { PORT } = require('./helpers/config')

const app = require('./app')

const { connectDb, models } = require('./db')

const eraseDatabaseOnSync = false

async function start() {
  try {
    await connectDb()

    if (eraseDatabaseOnSync) {
      await Promise.all([models.User.deleteMany({}), models.Menu.deleteMany({})])
    }

    const server = app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))

    process.on('uncaughtException', () => {
      server.close(() => {
        process.exit(1)
      })
    })

    process.on('unhandledRejection', () => {
      server.close(() => {
        process.exit(1)
      })
    })
  } catch (err) {
    console.error(err)
  }
}

start()
