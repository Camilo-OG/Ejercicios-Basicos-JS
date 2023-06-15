let numb1 = new Number (window.prompt("Veamos que numero es mayor, ingrese el primer número"));
let numb2 = new Number (window.prompt("ingrese el segundo numero"));
let numb3 = new Number (window.prompt("Ingrese el tercer numero"))
if (numb1 > numb2 && numb1 > numb3) {
    console.log(`El número ${numb1} es mayor que los números ${numb2} y ${numb3}`)
} else if (numb2 > numb1 && numb2 > numb3) {
    console.log(`El número ${numb2} es mayor que los números ${numb1} y ${numb3}`)
} else if (numb3 > numb1 && numb3 > numb2) {
    console.log(`El número ${numb3} es mayor que los números ${numb1} y ${numb2}`)
}