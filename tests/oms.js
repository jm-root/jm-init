let service = require('./service')
let nav = require('../config/oms/nav')
let config = service.config

async function initNav () {
  let doc = await config.post('/oms/nav', {value: nav})
  console.log(doc)
  return doc
}

async function initConfigManager (key, value) {
  let doc = await config.post('/root:config:roots/' + key, {value})
  console.log(doc)
  return doc
}

async function initConfigManagers () {
  let doc = await initConfigManager('oms', {title: '菜单配置'})
  doc = await initConfigManager('gateway', {title: '路由配置'})
  return doc
}

initConfigManagers()