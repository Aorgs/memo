const fs = require('fs')
const get = require('./get')
const path = require('./path')

module.exports = function list() {
  if(fs.existsSync(path)) {
    const pkg = require(`${path}/package.json`)
    return Promise.resolve(pkg.memo_list)
  } else {
    return get().then(list)
  }
}
