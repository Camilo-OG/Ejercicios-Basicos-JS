// commonJS --> el archivo package.json debe tener el "type": "commonjs",
// 3- importar funcion desde utils.js
const utils = require('./utils.js')


// 4-llamar funcion
console.log(utils.obtenerNombreCompleto('Alberto','Rodriguez'));
console.log(utils.imprimirEdad(23));



