const service = require('./service')
let acl = service.acl

async function initAcl () {
  let doc = await acl.init()
  console.log(doc)
  return doc
}

async function initRootUser (id) {
  let acl = service.acl
  let doc = await acl.post('/users', {
    'acl_user': id,
    '_id': id,
    'nick': 'root',
    'roles': ['root']
  })
  console.log(doc)
  doc = await acl.post('/users/' + id + '/roles', {'roles': ['root']})
  console.log(doc)
  return doc
}

// initAcl()
initRootUser('596d5cb3baeeaf00203de4ec')
