/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
const logger = require('./helpers/logger')
const { PORT } = require('./helpers/config')

const http = require('./app')

const { connectDb, models } = require('./db')

const eraseDatabaseOnSync = false

async function start() {
  try {
    await connectDb()

    if (eraseDatabaseOnSync) {
      await Promise.all([
        models.User.deleteMany({}),
        models.Settings.deleteMany({}),
        models.Menu.deleteMany({}),
      ])
    }

    const server = http.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`),
    )

    process.on('uncaughtException', (err) => {
      logger.error('uncaughtException: ', {
        message: `${err.message}\n${err.stack}`,
      })
      server.close(() => {
        process.exit(1)
      })
    })

    process.on('unhandledRejection', (reason) => {
      logger.error('unhandledRejection: ', {
        message: `${reason.message}\n${reason.stack}`,
      })
      server.close(() => {
        process.exit(1)
      })
      // throw reason; // Winston caught the exception and logged it
    })
  } catch (err) {
    console.error(err)
  }
}

start()
