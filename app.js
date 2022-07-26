const { crearArchivo } = require('./helpers/crearArchivo.js');
const argv = require('./config/yargs');

console.clear()


  
console.log( argv );
/* 
const [ , , arg3 = ' base=5 ' ] = process.argv;
const [, base] = arg3.split( '=' );
 */

crearArchivo( argv.b, argv.h, argv.l )
  .then( console.log )
  .catch( console.error )