const generarCaracteres = (caracter,numero) => {
    // metodo .repeat crea y concatena el string (n) veces 
    let resultado = caracter.repeat(numero);
    console.log(resultado)
}
generarCaracteres("hola",5);
generarCaracteres("x",3)