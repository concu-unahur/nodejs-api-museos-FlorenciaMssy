const superagent = require('superagent');
const fs = require('fs');

function escribirArchivoMuseos(error, respuesta) {
    if (error) {
    throw new Error('algo se rompió', error);
  }

  const museos = respuesta.body.results;

  museos.forEach( museo =>{ actualMuseos = `El museo es: ${museo.nombre}. Direccion: ${museo.direccion}. Por cualquier consulta comunicarse al: ${museo.telefono}\n`;
  fs.appendFile('./museos.txt',actualMuseos,end);})
}

function escribirArchivoOrganismos(error,respuesta){

  if (error) {
    throw new Error('algo se rompió', error);
  }

  const organismos = respuesta.body.results;

  organismos.forEach( organismo =>{ actualOrganismos = `El organismo es: ${organismo.nombre}. Direccion: ${organismo.direccion}. Por cualquier consulta comunicarse al: ${organismo.telefono}\n`;
  fs.appendFile('./organismos.txt',actualOrganismos,end);})

  
}

function end(error){
  if (error) {
    throw new Error('algo se rompió', error);
  }
  else{
    console.log('Terminado.');
  }
}

//console.log('Antes de llamar a superagent')



superagent
  .get('https://www.cultura.gob.ar/api/v2.0/museos')
  .query({ format: 'json' })
  .end(escribirArchivoMuseos) //el query le pasa la data a esta funcion


  superagent
  .get('https://www.cultura.gob.ar/api/v2.0/organismos')
  .query({ format: 'json' })
  .end(escribirArchivoOrganismos) //el query le pasa la data a esta funcion
