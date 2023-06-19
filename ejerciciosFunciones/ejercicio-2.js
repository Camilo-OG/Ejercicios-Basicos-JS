console.log("-------Ejercicio 2 -------")
const vocales = ["a","e","i","o","u"];

function esVocal (caracter) {
    let letra = caracter.toLowerCase();
    for (let i = 0; i < vocales.length; i++) {
        if(letra === vocales[i]){
            return console.log(true);
        }
    }
    return console.log(false)
    
}

esVocal("A");
esVocal("c");
esVocal("e");

