const config = require('../config')
const service = require('../')(config)
service.sso
  .post('/signon', {name: 'jeff', amount: 10})
  .then(doc => {
    console.log(doc)
    return service.sso.post('/touch', {token: doc.token, amount: 100})
  })
  .then(function (doc) {
    console.log(doc)
  })
