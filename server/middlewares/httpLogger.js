const morgan = require('morgan')
const logger = require('../helpers/logger')

morgan.token('params', (req) => JSON.stringify(req.params))

morgan.token('body', (req) => JSON.stringify(req.body))

logger.stream = {
  write: (message) => logger.info(message.substring(0, message.lastIndexOf('\n'))),
}

module.exports = morgan(':method :url :status :params :body', {
  stream: logger.stream,
})
