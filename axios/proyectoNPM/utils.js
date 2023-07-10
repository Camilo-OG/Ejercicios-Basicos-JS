//  1-declarar funcion
const obtenerNombreCompleto = (nombre, apellido) => {
  return `El nombre completo de la persona es ${nombre} ${apellido}`
}
const imprimirEdad = edad => {
  return `La edad es: ${edad}`
}

// 2-permitir exportar funcion
module.exports = {
  obtenerNombreCompleto,
  imprimirEdad
} 