//Funcion para consultar los datos

function fetchDatos () {
  fetch('https://reqres.in/api/users')
  .then(response => response.json()) /* hacemos la consulta y si es positiva, convierte la respuesta a json */
  /* .then(json => console.log(json)) */ /*guarda el json en un parametro y se imprime en consola*/
  .then(json => {
    /* for(let i = 0; i < json.data.length ; i++ ) {
      addUser(json.data[i])
    } */
      json.data.forEach(user => { // cumple la misma funcion de recorrer el arreglo
        addUser(user)
      });
      
  })
  //si la url falla podemos retornar el error por consola
  .catch(err => console.log("solicitud fallida" + err))
}

// Inyectar datos en el html (DOM)

const userContainer = document.querySelector('#users')

function addUser(user) {
  const inyectarHTML = 
  '<div class="col-lg-2"' +
  '<div class="card">' +
  '<img src=' + user.avatar + '\n'+ 'class="card-img-top">' +
  '<div class="card-body" data_id=' + user.id + '>' +
  '<h3 class="card-title">' + user.first_name + ' ' + user.last_name + '</h3>' +
  '<p class="card-text">' + user.email + '</p>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '<br/>';
  userContainer.innerHTML += inyectarHTML;
}
// /n inyecta un espacio