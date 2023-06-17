const producto = {
    precio: 600,
    descuento: 10,
    calcularNeto: function() {
        console.log(`El precio final es ${this.precio-this.precio*this.descuento/100}`)
    }
};
producto.calcularNeto();