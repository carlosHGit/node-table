const argv = require('yargs')
        .option('b', {
          alias: "base",
          type: 'number',
          demandOption: true,
        })
        .option('l', {
          alias: "limit",
          type: 'number',
          demandOption: false,
        })
        .check((argv, options) => {
          if( isNaN( argv.b ) || isNaN( argv.l )){
            throw 'Error: The base must be a number'
          }
          return true;
        })
        .argv


module.exports = argv;