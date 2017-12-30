var config = require('../config')
var service = require('../')(config)
var nav = require('../config/oms/nav')
service.config
  .post('/oms/nav', {value: nav})
  .then(function(doc){
    console.log(doc)
  })
