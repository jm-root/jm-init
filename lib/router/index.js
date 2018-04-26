let jm = require('jm-ms-core')
let ms = jm.ms

/**
 * @apiDefine Error
 *
 * @apiSuccess (Error 200) {Number} err 错误代码
 * @apiSuccess (Error 200) {String} msg 错误信息
 *
 * @apiSuccessExample {json} 错误:
 * {
 *   err: 错误代码
 *   msg: 错误信息
 * }
 */

module.exports = function (opts) {
  let service = this
  let router = ms()
  if (service.debug) {
    router.use(function (opts, cb, next) {
      logger.debug(opts)
      next()
    })
  }
  service.routes || (service.routes = {})
  let routes = service.routes
  router.use(require('./help')(service))

  router.use(function (opts, cb, next) {
    if (!service.ready) return cb(null, jm.ERR.FA_NOTREADY)
    next()
  })

  return router
}
