/* 1 */

const section = document.getElementById('container');

/* 2 */

const seccion = document.querySelector('#container');

/* 3 */

const segundo = document.querySelectorAll('.second');

/* 4 */

const tercero = document.querySelector('#container ol .third');

/* 5 */

/* 
const contenedor = document.createElement('div');
contenedor.id = 'Contenedor';
contenedor.textContent = '¡Hola!'
// console.log(seccion.children)
seccion.insertBefore(contenedor, seccion.children[0]) 
*/

const hello = document.createElement('p');
hello.textContent = '¡Hola!';
seccion.insertBefore(hello, seccion.children[0]);

/* 6 */

const footer = document.querySelector('.footer');
console.log(footer);
footer.classList.add('principal');

/* 7 */

footer.classList.remove('principal');

/* 8 */

const nuevoLi = document.createElement('li')

/* 9 */

nuevoLi.textContent = 'four4';

/* 10 */

const lista = document.querySelector('#container ul')

lista.appendChild(nuevoLi)
