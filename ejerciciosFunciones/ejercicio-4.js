
function sumaArreglo (...arreglo) {
    let suma = 0;
    const sumar = arreglo.reduce( ( suma, arreglo) => suma += arreglo);
    console.log(`La suma de los numero ${arreglo} más el largo del arreglo "${arreglo.length}" da como resultado ${sumar + arreglo.length}`)  
}
sumaArreglo(1,2,3,4,5);

