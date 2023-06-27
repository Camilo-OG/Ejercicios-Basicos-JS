const form1 = document.querySelector('#form1');
const nombre = form1[0].value;
const apellido = form1[1].value;

form1.addEventListener('submit',e =>{
    e.preventDefault();
    console.log( `Hola ${nombre} ${apellido}, Bienvenido`)
})
console.log(form1)
