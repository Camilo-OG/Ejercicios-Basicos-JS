function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    //Accedp a la latitud y longitud desde la api de geolocalizacion
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Esta es mi ubicacion: Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "No se puede acceder a su ubicación";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation no es soportada por su buscador";
  } else {
    status.textContent = "Localizando…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

/* document.querySelector("#find-me").addEventListener("click", geoFindMe); */