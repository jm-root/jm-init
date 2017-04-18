var jm = require('jm-ms-core');
var ms = jm.ms;
var logger = jm.getLogger('jm-init');

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
    var service = this;
    var router = ms();
    if(service.debug){
        router.use(function(opts, cb, next){
            logger.debug(opts);
            next();
        });
    }
    service.routes || ( service.routes = {} );
    var routes = service.routes;
    router.use(require('./help')(service));

    router.use(function(opts, cb, next){
        if(!service.ready) return cb(null, jm.ERR.FA_NOTREADY);
        next();
    });

    return router;
};