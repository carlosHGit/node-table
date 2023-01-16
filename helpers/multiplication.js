const fs = require('fs');

const createFile =  async( table =  5, limit = false ) => {
  try {

    if(!limit) return null
    let output = '';

    for (let index = 1; index <= limit; index++) {
      output += `${ table } x ${ index } =  ${ table * index }\n`;
    }

    fs.writeFileSync( `./output/tabla-${table}.txt`, output)
    console.log(output)
    return `tabla-${table}.txt created`

  } catch (error) {
    throw error;
  }
}


module.exports = {
  createFile
}