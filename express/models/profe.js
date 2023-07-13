// modelo de la tabla usuarios creada en zequelize

const { Model, DataTypes } = require("sequelize");
const dataBase = require("../utils/db");

//definición del modelo (abstracción de la tabla)
const Usuarios = dataBase.define(
  "Usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: DataTypes.TEXT,
    apellido: DataTypes.TEXT,
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
//comprobar que el modelo se creó correctamente
//console.log(Usuarios === dataBase.models.Usuarios);

//accediendo al modelo Usuarios y creando uno nuevo
// POST
const createUser = async () => {
  await Usuarios.create({
    nombre: "Alberto",
    apellido: "Urbina",
  });
  console.log("Usuario creado exitosamente");
};

// listar los elementos de la tabla usuarios
//GET 
const getAllUsers = async () => {
    const lista = await Usuarios.findAll();
    console.log(JSON.stringify(lista));
}

// actualizar un recurso en la base de datos
// PUT
const idConsultada = 2; // desde la ruta en la api, desde una fomulario, etc
const updateUser = async () => {
    //buscamos si el usuario con el id recibido existe en la BD
    const userId = await Usuarios.findAll({
        where:{
            id: idConsultada
        }
    })
    console.log("Tipo de dato de FindAll:", typeof(userId));

    // si el usuario existe se ejecuta la actualización // si no, se envia mensaje de error
    if(userId.length === 1) {
        await Usuarios.update({ nombre: "Daniel" }, { where: { id: idConsultada } });
    console.log("Registro actualizado correctamente");
    } else {
        console.log("Usuario no existe")
    }
}


//ejecuto la función para crear un usuario
//createUser();
//getAllUsers();
updateUser();