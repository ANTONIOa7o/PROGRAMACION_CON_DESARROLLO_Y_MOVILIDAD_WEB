/*

OBJECT XMLHttpRequest (xhr); encontrada como XMLHTTP; Como una interface que se usa
para:
1.Realizar peticiones, a servidores web, mediante directivas open();
2. enviar peticiones concretas, mediante  la  directiva send()
3. reibir las respuestas a traves de una propiedad responseText

*/

var xhr;

function buscarPokemon() {

    //Obtener el objeto de XMLHttpRequest
    //Obtenemos informacion de URL
    xhr = new XMLHttpRequest();

    //recuperar el nombre del pokemon introducido por el usuario en el input
    var dato = nombre.value

    //Preparo la peticion

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + dato, true)//true=asincrono, en segundo plano

    //En la cabecera indico que la respuesta como la quiero? La quiero en formato JSON
    xhr.setRequestHeader("accept", "application/json");

    //Informamos y  detectamos la  funcion que procesa la respuesta
    xhr.onreadystatechange = procesarRespuesta; //Sin parentesis.  Como  si  fuera un remitente 

    //enviar peticion
    xhr.send();

    //Peticion de  gestionar un posible error, si no pones
    xhr.onerror = procesarError;

}

function procesarRespuesta() {
    //solo se va a procesar si  hemos  recibido toda la informacion solicitada
    if (xhr.readyState = 4) {//4 solicitud finalizada
        var respuesta = JSON.parse(xhr.responseText);// JSON.parse(cadena)->Transformamos en una cadena el json, object javaScript.
        console.log(respuesta);
            document.getElementById('resultado').innerText =
            "Nombre: "+ respuesta.name+"\n" +
            "Altura: " + respuesta.height + "\n"+
            "Peso: " + respuesta.weight + "\n"+
            "Habilidades: " +"\n"


            var habilidades =respuesta.abilities
            /*

             * 4. for in 

            Sintaxis:

                            Asigna un nombre
                            de propiedad diferente
                            a la variable en                        objeto, o elementos cuyas propiedades
                            cada iteracion                          sean enumerables
                                ↓                                          ↓
                        for ( variable i                in               objeto ){

                                    instrucciones;
                        }

                    En general,, es como iterar por las propiedades y los valores de las propiedades del object
                    de manera generica. Y se ejecutará una vez por cada una de las propiedades o valores del objets
                    !OJO!!!, para recorre el  Array(ese conjunto de variables, objetos o elementos dentro de un  formato, que
                        puede ser jason, array , matrices...EL ORDEN DE LOS ELEMENTOS-indices, son IMPORTE)
             */

                                for (var i in habilidades){
                                    document.getElementById('resultado').innerText+=
                                    "\t"+habilidades[i].ability.name+"\n";
                                }
                        
    }
}
function procesarError() {

document.getElementById('resultado').innerText="ERROR ⁉‼❗"

}