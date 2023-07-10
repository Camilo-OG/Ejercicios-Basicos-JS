//ECMAScript6 importacion desde const.js --> el package .json debe tener el "type": "module",
import { number, obtenerNombreCompleto, imprimirEdad } from './const.js';

console.log(obtenerNombreCompleto('Camilo', 'Osorio'))
console.log(imprimirEdad(number))
console.log(number)
