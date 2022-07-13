function ejecutar() {
  var respuesta = document.getElementById("resultado");
  var option = document.getElementById("option").value;

  switch (option) {
    case "1":
      respuesta.innerText = "FORMATEANDO EL DISCO, por favor espere...";
      break;

    case "2":
      respuesta.innerText =
        "RECOPILANDO DATOS PARA SU ELIMIACION, por favor espere...";
      break;

    case "3":
      respuesta.innerText = "BUSCANDO NUEVA UBICION DE ELEMENTOS DE CONEXION";
      break;

    case "4":
      respuesta.innerText =
        "SU NAVEGADOR ESTA SIENDO MONOTORIZADO, por favor espere..." +
        navigator.userAgent;
      break;

    case "5":
      respuesta.innerText = "FORMATEANDO EL DISCO, por favor espere...";
      break;
    default:
      respuesta.innerText = "Es necesario elegir una de las opciones";
      break;
  }
}
