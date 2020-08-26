#!/usr/bin/env node

const {program} = require('commander')
const pkg = require('./package.json')

const help = require('./src/help')
const get = require('./src/get')
const list = require('./src/list')
const view = require('./src/view')

program
  .version(pkg.version, '-v, --version')
  .option('-g, --get', 'get memo', get)
  .option('-l, --list', 'memo list', viewList)
  .option('-m, --memo <name>', 'view memo', view)
  .on('--help', help)
  .parse(process.argv)

function viewList() {
  list().then(function (l) {
    console.log(l)
  })
}
