let listaNumeros = [2,4,5,1,2];
function sumaLista(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return console.log(`La suma da como resultado ${suma}`);
};

sumaLista(listaNumeros);
