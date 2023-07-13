// Modelo de la tabla de clientes creada en sequelize

const { Model, DataTypes } = require('sequelize');

const dataBase = require('../utils/db')


// definir modelo de tabla ( abstraccion de la tabla )
const clientes = dataBase.define('Clientes', { 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: DataTypes.TEXT,
  apellido: DataTypes.TEXT,
  direccion: DataTypes.CHAR,
}, {
  timestamps: false // omitir que se cree columna createdAt y updatedAt
});

/* Verificar conexion con la base de datos */
console.log(clientes === dataBase.models.Clientes);

module.exports = clientes;

