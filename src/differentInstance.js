const { newCustomLogger } = require('./logger')
exports.handler = async () => {
  const logger = newCustomLogger()
  logger.info('testMsg', { statusCode: 418 })
  return { statusCode: 200 }
}
