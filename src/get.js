const fs = require('fs')
const getMemo = require('./getMome')
const path = require('./path')

function delDir(path){
  let files = []
  if(fs.existsSync(path)){
    files = fs.readdirSync(path)
    files.forEach((file, index) => {
      let curPath = path + '/' + file
      if(fs.statSync(curPath).isDirectory()){
        delDir(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    });
    fs.rmdirSync(path)
  }
}

module.exports = async function get() {
  if(fs.existsSync(path)) {
    delDir(path)
  }
  await getMemo()
}
