//hacer importacion con require de sequelize(CommonJS)
const { Sequelize } = require('sequelize');

// Declaramos la instancia para la conexion a nuestra base de datos
//                               base_de_dato, usuario, contraseña,
const sequelize = new Sequelize('estudio_caso', 'root', '', {
  host: 'localhost', //servidor
  dialect: 'mysql',   /* tipo de motor de base de datos one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = sequelize;