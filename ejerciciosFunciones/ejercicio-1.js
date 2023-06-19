function numeroMayor (num1,num2,num3) {
    const numeros = [num1, num2, num3];
    if(num1 === num2 && num2 === num3){
        console.log("Los numeros son iguales");
    } else {
        let mayor = Math.max(...numeros);
        console.log(mayor)
    }
    

}

numeroMayor(6,7,4);
numeroMayor(3,3,3);
numeroMayor(8,8,3);