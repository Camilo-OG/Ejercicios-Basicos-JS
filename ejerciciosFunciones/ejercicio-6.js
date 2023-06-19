console.log("-------Ejercicio 6 -------")

const arreglo1 = [1,2,3,4,5];
const arreglo2 = [6,7,8,9,10,11];
const arreglo3 = [1,2,3];
const arreglo4 = [3,4,5];

function booleanoArray(arr1,arr2) {
    let newArray = [...arr1,...arr2];
    console.log(newArray.length > 10 ? true : false);
}

booleanoArray(arreglo1,arreglo2);
booleanoArray(arreglo3,arreglo4);
