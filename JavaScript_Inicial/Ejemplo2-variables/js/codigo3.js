var nombre=window.prompt("Introducir nombre");
var apellidos=window.prompt("Introducir apellidos");
var edad=window.prompt("Introduce tu edad");
/**
 * window.prompt -> Genera un dialogo que cotiene de manera predeterminada un 
 * cuadro de texto de una linea, un boton(cancel) y otro de aceptar.
 * SIEMPRE DEVOLVERÁ UN STRING
 * 
 */
document.write("<h2>Hola<h2>"+"<br>"+"Mi nombre es: "+ nombre+"<br>"+ " mis apellidos son: "
+apellidos+ " y mi edad es : "+ edad+"años");

console.log("Hola"+"\n"+"Mi nombre es: "+ nombre+ " mis apellidos son: "
+apellidos+ " y mi edad es : "+ edad+"años.");