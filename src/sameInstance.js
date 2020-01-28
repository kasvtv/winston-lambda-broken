const logger = require('./logger')
exports.handler = async () => {
  logger.info('testMsg', { statusCode: 418 })
  return { statusCode: 200 }
}
