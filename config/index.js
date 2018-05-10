require('log4js').configure(require('path').join(__dirname, 'log4js.json'))
var config = {
  development: {
    port: 3000,
    trustProxy: 1,
    config_root_init: 'init',
    gateway: 'http://api.jamma.cn:81',
    modules: {
      init: {
        module: process.cwd() + '/lib'
      }
    }
  },
  production: {
    port: 80,
    trustProxy: 1,
    config_root_init: 'init',
    modules: {
      init: {
        module: process.cwd() + '/lib'
      }
    }
  }
}

var env = process.env.NODE_ENV || 'development'
config = config[env] || config['development']
config.env = env

module.exports = config
