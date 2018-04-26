const config = require('../config')
const service = require('../')(config)
const value = require('../config/gateway')
service.config
  .post('/gateway/modules', {value})
  .then(function (doc) {
    console.log(doc)
  })
