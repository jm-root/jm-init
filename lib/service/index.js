let event = require('jm-event')
let MS = require('jm-ms')
let ms = MS()

module.exports = function (opts) {
  opts || (opts = {})
  let debug = opts.debug || false

  let o = {
    debug: debug
  }
  event.enableEvent(o)

  let bind = function (name, uri) {
    uri || (uri = '/' + name)
    ms.client({
      uri: opts.gateway + uri
    }, function (err, doc) {
      !err && doc && (o[name] = doc)
    })
  }
  bind('config')
  bind('acl')
  require('./acl')(o, opts)
  return o
}
