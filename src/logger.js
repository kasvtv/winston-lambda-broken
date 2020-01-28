const { createLogger } = require('winston')
const JsonStdoutTransport = require('./transports/jsonStdoutTransport')

const myCustomLevels = {
  levels: {
    critical: 0,
    error: 1,
    warn: 2,
    info: 3,
    verbose: 4,
    debug: 5,
  },
}

const newCustomLogger = () =>
  createLogger({
    levels: myCustomLevels.levels,
    transports: [new JsonStdoutTransport()],
  })

module.exports = newCustomLogger()
module.exports.newCustomLogger = newCustomLogger
