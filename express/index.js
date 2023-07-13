const express = require('express')
const app = express();
const port = 3000;
const controllers = require('./controllers/controllers');
const dataBase = require('./utils/db');
const clientControllers = require('./controllers/clientController')


// test de conexion a la base de datos
const testConnection = async () => {
  try {
    await dataBase.authenticate(); //metodo authenticate es propio de sequelize
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// app.METHOD("/URL", funcionConsulta(request -> peticiones que se hacen a la ruta , response -> respuesta del servidor a las peticiones))
// use es un metodo de express --> cada vez que se ejecute le puedo cargar una funcionalidad adicional

//es necesario declararlo para poder recibir info del exterior en formato json y que el backen lo pueda manejar (traduce lo que se envie por el body para que express pueda entenderlo) ///////permite utilizar el objeto req.body//////
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  console.log(`se ejecuto una nueva consulta a un endpoint`);
  next();
})

app.get("/clients", clientControllers.getAllClients )
app.get("/user-list", controllers.userList)
app.get("/clientDetail/:id",clientControllers.getClientDetail)

app.get("/getAllClients", clientControllers.getAllClients)

app.post("/createClient", clientControllers.createClient)

app.delete("/deleteClient/:id", clientControllers.deleteClient)

app.put("/updateClient/:id", clientControllers.updateClient)


// el segundo parametro de listen es opcional
// app.listen(port, console.log(`Server running on port: ${port}`))

//llamada de funcion test
  try {
    testConnection();
    app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log("Ocurrio un error al inicializar el server", error);
  }

