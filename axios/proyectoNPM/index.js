const axios = require('axios'); // llamada al modulo que utilizaremos
// https://reqres.in/api/users esta es la api que utilizaremos

// se encargara de hacer una consulta a una api.
// Axios

/* axios.get('https://reqres.in/api/users')
.then(response => console.log(response.data)) */

// Async -> asincrono

const getUsers = async () => {
  try { // prueba ejecutar esto, y si no puedes capturalo en el catch
    const response = await axios.get('https://reqres.in/api/users')
    console.log(response.data.data)
    
    let email = response.data.data
    email.forEach(correo => {
      console.log(correo.email)      
    });
  } catch (error) {
    console.log(error)
  }
}

getUsers();
// Await -> esperar
