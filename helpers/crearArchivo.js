const { writeFileSync } = require( 'fs' );
const { crearTablaDeMultiplicar } = require('./multiplicar');

const crearArchivo = async ( base, h, listar ) => {

  try {
    
    const data = crearTablaDeMultiplicar( base, h );
    if ( listar ) {
      console.log( data );
    }
    writeFileSync( `./salida/tablaDel${ base }.txt`, data )
    return 'The file has been saved!!';
  
  } catch ( err ) {
  
    throw 'No llego la data para poder realizar la creación del archivo' + err;
    
  }
}

module.exports = {
  crearArchivo,
}