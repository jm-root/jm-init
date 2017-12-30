var service = require('./service');

/**
 * init服务
 * @class init
 * @param {Object} [opts={}] 参数
 * @example
 * opts参数:{
 *  gateway:(必填)
 * }
 * @returns {Object}
 * @example
 * 返回结果:{
 * }
 */
module.exports = function(opts){
    opts = opts || {};
    ['gateway'].forEach(function(key) {
        process.env[key] && (opts[key]=process.env[key]);
    });
    var o = service(opts);
    o.router =require('./router');

    return o;
};
