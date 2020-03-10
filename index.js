const superagent = require('superagent');
const fs = require('fs')

function imprimirMuseos(error, respuesta) {
  if (error) {
    throw new Error('algo se rompió', error);
  }

  const cantidad = respuesta.body.count;
  const museos = respuesta.body.results;

  console.log(`Se encontraron ${cantidad} museos.`);
  console.log(`El primer museo se llama ${museos[0].nombre}.`)
}

function escribirArchivo(error, respuesta){

  fs.writeFile('./museos.txt, El nombre del primer museo es: ', imprimirMuseos)
}

function terminar(error){

  if(error){
    throw new Error ('Hubo un problema');

  }
  else {
    console.log('Termine')

  }
  
  }

  console.log('Termine')
console.log('Antes de llamar a superagent')

superagent
  .get('https://www.cultura.gob.ar/api/v2.0/museos')
  .query({ format: 'json' })
  .end(escribirArchivo)

console.log('Después de llamar a superagent')
