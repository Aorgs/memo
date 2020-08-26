const download = require('download-git-repo')
const chalk = require('chalk')
const path = require('./path')

module.exports = function get() {
  return new Promise(function (resolve, reject) {
    download(
      'direct:https://gitee.com/Ayerss/mome.git',
      path,
      {clone: true},
      function (err) {
        if (err) {
          console.log(chalk.red('Error'))
          reject()
        } else {
          console.log(chalk.green('Success'))
          resolve()
        }
      })
  })
}
