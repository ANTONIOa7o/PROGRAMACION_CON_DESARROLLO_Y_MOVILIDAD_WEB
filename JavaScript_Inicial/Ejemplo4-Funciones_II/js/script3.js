


function mensaje() {
    var miClave=document.getElementById('clave').value;
 /* Otra forma ↓    var eMail=document.getElementById('email').value; */ 
          var eMail=email.value;

    document.getElementById('resultado').innerHTML=
    "Clave correcta: Autorizado a: "+ eMail + "  pulse ingresar "
    
}
function limpiar() {

 document.getElementById('resultado').innerHTML="";
    
}