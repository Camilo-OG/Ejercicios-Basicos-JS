const contenedor = document.querySelector('#main');
const divisor = document.querySelector('#caja1')

contenedor.addEventListener('mouseover', e => {
    contenedor.classList.add('alerta')
})
contenedor.addEventListener('mouseout', e=>{
    if(contenedor.classList.contains('alerta')){
        contenedor.classList.remove('alerta')
    }
})

divisor.addEventListener('mouseover', e=> {
    divisor.classList.add('rojo')
})
divisor.addEventListener('mouseout', e=> {
    if(divisor.classList.contains('rojo')) {
        divisor.classList.remove('rojo')
        divisor.classList.add('azul')
    }
})