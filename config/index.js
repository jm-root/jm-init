require('log4js').configure(__dirname + '/log4js.json');
var config = {
    development: {
        port:19980,
        trustProxy: 1,
        config_root_init: 'init',
        sdk: 'http://test.gzleidi.cn:81',
        modules: {
            init: {
                module: process.cwd() + '/lib'
            }
        }
    },
    production: {
        port: 19990,
        trustProxy: 1,
        config_root_init: 'init',
        modules: {
            init: {
                module: process.cwd() + '/lib'
            }
        }
    }
};

var env = process.env.NODE_ENV||'development';
config = config[env]||config['development'];
config.env = env;

module.exports = config;
