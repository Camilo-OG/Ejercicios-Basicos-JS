console.log("-------Ejercicio 7 -------")

const arreglo5 = [1,2,3,4,5];
const arreglo6 = [6,7,8,9,10,11];
const arreglo7 = [1,2,3];
const arreglo8 = [3,4,5];

function booleanoArray(arr1,arr2) {
    let newArray = [...arr1,...arr2];
    let newArray2 = [];
    for (i = 0; i < newArray.length; i++ ){
        newArray2.push(newArray[i]*2);
    }
    console.log(newArray2)
}

booleanoArray(arreglo5,arreglo6);
booleanoArray(arreglo7,arreglo8);
