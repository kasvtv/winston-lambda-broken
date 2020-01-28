const Transport = require('winston-transport')

module.exports = class JsonStdoutTransport extends Transport {
  log(info) {
    console.log(JSON.stringify(info, null, 2))
  }
}
