const notas = {
    ingles: {juan: 9,},
    programacion: {juan: 8,},
    html: {juan: 7,},
    promedio: function () {
        console.log(`El promedio de Juan es ${(this.ingles.juan + this.programacion.juan + this.html.juan) / 3 }`)
    }
};
notas.promedio();