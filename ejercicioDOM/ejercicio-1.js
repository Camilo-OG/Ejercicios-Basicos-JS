const d = document;
const btn2 = d.querySelector('div #jsstyle')
const texto = d.querySelector('#text')

btn2.addEventListener('click',activarTexto)

function activarTexto() {
    if(texto.className.includes('texto-activo')){
        texto.classList.remove('texto-activo')
    }else{
        texto.classList.add('texto-activo')
    }
}