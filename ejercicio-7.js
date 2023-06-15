let num1 = new Number (window.prompt("Veamos que numero es mayor, ingrese el primer número"));
let num2 = new Number (window.prompt("ingrese el segundo numero"));
let num3 = new Number (window.prompt("Ingrese el tercer numero"))
if (num1 > num2 && num1 > num3) {
    console.log(`El número ${num1} es mayor que los números ${num2} y ${num3}`)
} else if (num2 > num1 && num2 > num3) {
    console.log(`El número ${num2} es mayor que los números ${num1} y ${num3}`)
} else if (num3 > num1 && num3 > num2) {
    console.log(`El número ${num3} es mayor que los números ${num1} y ${num2}`)
}