function agregarTarea() {
  const tareaInput = document.getElementById("tareaInput"); // se asigna el input
  const nuevaTarea = tareaInput.value; // el valor del input se asigna a la variable
  
  if (nuevaTarea !== "") { // validacion
    const listaTareas = document.getElementById("listaTareas"); // se asigna el contenedor de las tareas
    const nuevaTareaElemento = document.createElement("li"); // se crea el elemento li en el html
    nuevaTareaElemento.textContent = nuevaTarea; // se asigna el valor del input al elemento html
    listaTareas.appendChild(nuevaTareaElemento); // se sube el elemento al html
    
    tareaInput.value = ""; // Limpiamos el campo de texto después de agregar la tarea
  } else {
    mostrarAdvertencia("El campo de tarea está vacío. Por favor, ingrese una tarea."); // mensaje de error
  }
}

function borrarTareas() {
  const listaTareas = document.getElementById("listaTareas");
  while (listaTareas.firstChild) {
    listaTareas.removeChild(listaTareas.firstChild);
  }
}

function mostrarAdvertencia(mensaje) {
  const advertencia = document.createElement("div");
  advertencia.classList.add("advertencia");
  advertencia.textContent = mensaje;
  
  const container = document.querySelector(".container");
  container.appendChild(advertencia);
  
  setTimeout(function() {
    advertencia.remove();
  }, 2000);
}
