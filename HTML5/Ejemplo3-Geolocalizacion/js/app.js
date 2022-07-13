
var mapa;
function mostrarMapa() {
    //1. Comprobar si el  navegador y el dispositivo soportan la geolocalizacion
    if (navigator.geolocation) {
        //2.Obtener la ubicacion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    } else {
        alert("Tu dispositivo o navegador no accede a la geolocalizacion");
    }
    //3.Generamos la variable de las opiciones de nuestro mapa
    var opciones = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    mapa = new google.maps.Map(document.getElementById('resultado'), opciones);
}
//4.La funcion de localizacion, su mision princial plasmar las coordenadas a mostrar
function mostrarLocalizacion(posicion) {
    //obtenemos coordenadas
    var pos = new google.maps.LatLng(40.43498953823477, -3.651933522454866);
    //mostrar la ubicacion con texto
    var info = new google.maps.InfoWindow({
        map: mapa,
        position: pos,
        content: 'Estamos Aqui'
    });
    //mostramos la marca posicion
    var marker = new google.maps.Marker({
        position: { lat: 40.43498953823477, lng: -3.651933522454866 },
        map: mapa,
        title: 'Negocio?'
    });
    //5. Posicionar el mapa, llamado del  objeto al  elemento HTML
    mapa.setCenter(pos);
}
//6.Manejar  posibles errores, formalidades necesarias
function manejarError(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Permiso Denegado');
            break;
        case error.TIMEOUT:
            alert('Tiempo de espera agotado');
            break;
        case error.POSITION_UNVAILABLE:
            alert('No se detecta la ubicacion');
            break;
        case error.UNKNOWN_ERROR:
            alert('Error desconocido #202#');
            break;
    }

}




