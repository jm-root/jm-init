module.exports = function (service, opts) {
  opts || (opts = {})
  var bank = service.bank
  bank.init = function (opts) {
    return service.login()
      .then(function (doc) {
        return new Promise(function (resolve, reject) {
          bank.post('/cts', {
            token: service.currentUser.token,
            code: 'cny',
            name: '人民币'
          }, function (err, doc) {
            if (err) throw err
            resolve(doc)
          })
        })
      })
      .then(function (doc) {
        return new Promise(function (resolve, reject) {
          bank.post('/cts', {
            token: service.currentUser.token,
            code: 'tb',
            name: '惠通宝'
          }, function (err, doc) {
            if (err) throw err
            resolve(doc)
          })
        })
      })
      .then(function (doc) {
        return new Promise(function (resolve, reject) {
          bank.post('/cts', {
            token: service.currentUser.token,
            code: 'sp20000',
            name: '分享分20000'
          }, function (err, doc) {
            if (err) throw err
            resolve(doc)
          })
        })
      })
      .then(function (doc) {
        return new Promise(function (resolve, reject) {
          bank.post('/cts', {
            token: service.currentUser.token,
            code: 'sp600',
            name: '分享分600'
          }, function (err, doc) {
            if (err) throw err
            done()
          })
        })
      })
  }
}
