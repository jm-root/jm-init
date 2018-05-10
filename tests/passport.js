const config = require('../config')
const service = require('../')(config)
service.passport
  .post('/register', {account: 'root', password: '123', _id: '596d5cb3baeeaf00203de4ec', nick: 'root'})
  .then(function (doc) {
    console.log(doc)
  })
