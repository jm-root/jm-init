var service = require('./service');

/**
 * init服务
 * @class init
 * @param {Object} [opts={}] 参数
 * @example
 * opts参数:{
 *  sdk:(必填)
 *  mq:(可选，如果有，则初始化时通过消息服务器通知重新加载)
 * }
 * @returns {Object}
 * @example
 * 返回结果:{
 * }
 */
module.exports = function(opts){
    opts = opts || {};
    ['mq', 'sdk'].forEach(function(key) {
        process.env[key] && (opts[key]=process.env[key]);
    });
    var o = service(opts);
    o.router =require('./router');

    return o;
};
