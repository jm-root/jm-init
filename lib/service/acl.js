let fs = require('fs')
let _ = require('lodash')
const defaultDir = '../config/acl'

module.exports = function (service, opts = {}) {
  let acl = service.acl

  function processResource (o) {
    let n = _.pick(o, 'code', 'title', 'permissions', 'sort')
    let v = _.pick(o, 'children').children
    if (v) {
      n.children = []
      v.forEach(function (o) {
        n.children.push(processResource(o))
      })
    }
    return n
  }

  acl.exportResources = async function (dir = defaultDir) {
    let docs = await this.get('/resources/tree')
    let v = []
    docs.rows.forEach(function (o) {
      v.push(processResource(o))
    })
    let s = JSON.stringify(v, null, 2)
    console.log(s)
    fs.writeFileSync(dir + '/resources.json', s, 'utf8')
    return v
  }

  acl.exportRoles = async function (dir = defaultDir) {
    let docs = await this.get('/roles')
    let v = []
    docs.rows.forEach(function (o) {
      v.push(processResource(o))
    })
    console.log(JSON.stringify(v, null, 2))
    return v
  }
}
