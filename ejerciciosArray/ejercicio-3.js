const meses = [null,"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let mes = prompt("Por Favor ingrese un número del 1 al 12");

if(mes < 1 || mes > 12) {
    document.write(`Por favor recargue la pagina y lea bien, el numero ${mes} no esta dentro del 1 al 12`);
} else {
    document.write(`el mes escogido es ${meses[mes]}`);
};