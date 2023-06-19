/* let listaNumeros = [2,4,5,1,2];
function sumaLista(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return console.log(`La suma da como resultado ${suma}`);
};

sumaLista(listaNumeros); */

// ...nums permite agregar array a la funcion
function sumarLista(...nums) {
    let total = 0;
    // .reduce Aplique una función simultáneamente contra dos valores de la matriz (de izquierda a derecha) para reducirla a un solo valor.
    const result = nums.reduce( (total, nums) => total += nums);
    // nums.reduce separa el array nums en este caso el total con un numero del array para sumarlos
    // result = 0+1
    // result = 1+2
    // result = 3+3
    console.log(result);
}

sumarLista(1,2,3);