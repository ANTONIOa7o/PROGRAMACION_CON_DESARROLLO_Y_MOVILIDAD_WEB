

function acceso() {

    var clave = "Helsinki";
    console.log(clave)
    var intentos = false;
    var contador = 0;
    while (contador < 3 && intentos == false) {
        var claveAcceso = window.prompt("Introduce clave admin:");
        if (claveAcceso === clave) {
            intentos = true;
            document.getElementById('resultado').innerText = "Acceso aprobado!"
        }
        contador++

    }

    if (!intentos) {
        document.getElementById('resultado').innerText="Lo sentimos, contacte al dept. de Informatica"
        
    }


}