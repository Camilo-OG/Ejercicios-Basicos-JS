let palabra = window.prompt(`veamos cuantas veces tiene la letra "a" la palabra`)
let contador = 0;
for (let i = 0; i < palabra.length; i++){
    if (palabra[i] === "a"){
        contador++
    }
};
document.write( `La palabra ${palabra} tiene ${contador} veces la letra "a"` );