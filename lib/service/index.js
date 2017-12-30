var event = require('jm-event')
var MS = require('jm-ms')
var ms = MS()

module.exports = function (opts) {
  opts || (opts = {});
  var debug = opts.debug || false;

  var o = {
    debug: debug
  };
  event.enableEvent(o);

  var bind = function (name, uri) {
    uri || (uri = '/' + name)
    ms.client({
      uri: opts.gateway + uri
    }, function (err, doc) {
      !err && doc && (o[name] = doc)
    })
  }
  bind('config')

  return o;
};

