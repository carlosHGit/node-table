const { createFile } = require('./helpers/multiplication')
const argv = require('./config/yargs')
require('colors')

console.clear()

const base = argv.base
const limit = argv.limit

console.log('base:'.bgRed, base)
console.log('limit:'.bgRed, limit)


createFile( base, limit )
  .then(console.log)
  .catch(console.error)
