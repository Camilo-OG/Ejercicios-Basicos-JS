console.log("-------Ejercicio 5 -------")

function multiplicarArreglo (...array) {
    let numMax = Math.max(...array);
    let numMin = Math.min(...array)
    let resultado = numMax * numMin
    console.log (`El numero mayor es ${numMax} y el menor es ${numMin}, por lo que al multiplicarlos da ${resultado}`)
}

multiplicarArreglo(4,5,8,2,5);