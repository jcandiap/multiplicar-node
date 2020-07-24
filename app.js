const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(respuesta => console.log(respuesta))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}









//console.log(process.argv);

/*
    Para llamar al programa en la raiz del cmd introducimos el comando "node app --base=5"
*/

//console.log(argv.base);

// let parametro = argv[2];

// let base = parametro.split('=')[1];