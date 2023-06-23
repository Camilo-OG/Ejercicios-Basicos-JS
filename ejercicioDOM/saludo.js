
const btn = document.querySelector('.btn')
const form = document.querySelector('#formulario')


/* 
const usuarios = [{nombre: 'camilo', apellido: 'osorio'},{nombre: 'gabriela', apellido: 'moya'},{nombre: 'Esteban', apellido: 'gonzalez'}];

//Destructuring de objetos

const [ { nombre: user1, apellido: pw1},{ nombre: user2, apellido: pw2}] = usuarios;

console.log(user2) 
*/

form.addEventListener('submit', (e) => {

e.preventDefault();
    
const name = document.querySelector('#nombre').value;
const lastName = document.querySelector('#apellido').value;
const saludo = document.querySelector('#saludo'); 

saludo.textContent = `Hola ${name} ${lastName}, gracias por rellenar el formulario`;

if( name === '' || lastName === '') {
    saludo.textContent = `Todos los campos son necesarios`;
    saludo.style.color = 'red';
}/* else if( name === user1 && lastName === pw1 ) {
    saludo.textContent = `Logeado correctamente`;
    saludo.style.color = 'green';
} else {
    saludo.textContent = `Los datos ingresados son erroneos`;
    saludo.style.color = 'red'; 
}*/
});


