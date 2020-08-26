const fs = require('fs')
const chalk = require('chalk')
const list = require('./list')
const path = require('./path')

module.exports = function view(name) {
  list().then(memo_list => {
    if (memo_list.includes(name) === false) {
      console.log(chalk.red(`<name> : ${JSON.stringify(memo_list)}`))
      return false
    }

    fs.readFile(
      `${path}/${name}.txt`,
      'utf-8',
      function(err, data){
        if(err){
          console.log(err)
        }
        else{
          console.log('');
          console.log(chalk.magenta.bold('---------------------- Start ----------------------'));
          console.log('');
          console.log(chalk.green(data));
          console.log('')
          console.log(chalk.magenta.bold('----------------------  End  ----------------------'));
          console.log('')
        }
      });
  })
}
