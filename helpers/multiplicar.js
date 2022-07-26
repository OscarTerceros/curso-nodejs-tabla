const crearTablaDeMultiplicar = ( base, h ) => {
    
  let salida = '';

  for (let n = 1; n <= h; n++) {
    salida += `      ${ base } X ${ n } = ${ base * n } \n`; 
  }

  return ` =====================\n||    Tabla del ${ base }    ||\n =====================\n${salida}`;
}

module.exports = {
  crearTablaDeMultiplicar
}