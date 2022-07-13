function presiona() {
  var fecha = new Date();
  var dia = fecha.getDay()-1;
  var menu = "";

  switch (dia) {
    case 0:
      menu = "Cocido Madrileño";
      break;

    case 1:
      menu = "Cerrado, Descanso del Personal";
      break;

    case 2:
      menu = "Penne a la Siciliana";
      break;

    case 3:
      menu = "Calamares del Cantabrico a la Sal";
      break;

    case 4:
      menu = "Merluza al Canto";
      break;

    case 5:
      menu = "Judiones al vapor";
      break;

    case 6:
      menu = "Esparragos con Mahonesa";
      break;
      
    default:
      menu = "Error de conexion";
  }
  document.getElementById("resultado").innerText =
    "El menu del dia es: " + menu;
}
