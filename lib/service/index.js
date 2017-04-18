var jm = require('jm-core');

module.exports =  function(opts){
    opts || (opts = {});
    var mq = opts.mq || null;
    var debug = opts.debug || false;
    var sdk = opts.sdk || null;

    var o = {
        mq: mq,
        debug: debug
    };
    jm.enableEvent(o);

    return o;
};

