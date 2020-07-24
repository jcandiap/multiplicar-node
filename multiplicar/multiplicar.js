const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
//const fs = require('express');
//const fs = require('./fs'); archivos en una direccion de nuestro proyecto

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ingresada (${base}) no es valida`.red);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite ingresado (${limite}) no es valido`.red);
            return;
        }

        console.log('========================'.green);
        console.log(`====Tabla de ${base}====`.green);
        console.log('========================'.green);

        let respuesta = '';

        for (let i = 1; i <= limite; i++) {
            respuesta += `${ i } * ${ base } = ${ base * i }\n`;
        }

        resolve(respuesta);
    });

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ("${ base }") no es un numero`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
            //console.log('2 * ' + i + ' = ' + (2 * i));
        }


        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`.yellow)

            console.log(`El archivo tabla-${ base }.txt ha sido creado`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}