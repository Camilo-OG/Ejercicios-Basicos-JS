// variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();



/* se agregan los listeners a los cursos */
function cargarEventListeners() {
    // cuando agregar un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click',agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    // Vaciar el carrito

    vaciarCarritoBtn.addEventListener('click', () => {
        // console.log('vaciando carrito...');
        articulosCarrito = []; // reseteamos el arreglo

        // Eliminamos todo el html
        limpiarHTML();
    })

};

// Functions

/* reaccion de apretar el boton agregar al carrito */
function agregarCurso(e) {
    // console.log(e.target.classList)
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        // console.log(e.target.parentElement.parentElement)  --> codigo para subir al contenedor del nombre del curso
    }
};

// Elimina un curso del carrito
function eliminarCurso (e) {
    // console.log('desde eliminar curso')
    // console.log(e.target.classList)
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML(); // iterar sobre el carrito y mostrar su html
       
    }
}



// lee el contenido del gtml al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    //console.log(curso);

    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)
    if(existe){
        //actualizamos la cantidad
         const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];

    } else {
        //agregamos el curso al carrito
          
        // Agrega elementos al arreglo carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    carritoHTML();
}

// Muestra el carrito de compras en el html

function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        // una vez que funciona utilizar destructuring
        const {imagen, titulo, precio, cantidad} =curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src="${imagen}" width="80" height= "80"> </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> x </a>
            </td>
        `
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}

// elimina los cursos del tbody
function limpiarHTML () {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';
    
    // se recomienda esta opcion
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
};