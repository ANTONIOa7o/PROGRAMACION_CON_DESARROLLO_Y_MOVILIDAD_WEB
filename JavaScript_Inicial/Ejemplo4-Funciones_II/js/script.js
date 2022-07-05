/*
El método getElementById()-> NOS DEVUELVE EL ELEMENTO QUE CONTIENE AQUEL ATRIBUTO Id="";
con el valor especificado. Siendo su uso muy extendido cuando queremos manipular
u obtener información de un elemento de su DOCUMENTO.

* importante ↑
*/

function funcionesMath() {
    document.getElementById('resultado').innerHTML=
    "<label style='color:red; font-weight:bold ;'> Logaritmo: "+ Math.log(1000)+"<br>"+
    "Exponencial: "+ Math.exp(8)+"<br>"+
    "Raiz Cuadrado: "+ Math.sqrt(9)+"<br>"+
    "Potencia de 2^(Elevado a)8: "+Math.pow(2,8)+"<br>"+
    "Valor Absulo: "+ Math.abs(-66675)+"<br>"+
    "Redondeo a la Baja: " + Math.floor(6.3458)+"<br>"+
    "Redondeo al alza: "+ Math.ceil(6.3458)+"<br>"+
    "Redondeo Medio: "+Math.round(6.3458)+"<br>"+
    "*Random o semilla: "+Math.random()+"<br>"+
    "Random del 1 al 10: "+Math.random()*10+"<br>"+
    "Valor Máximo: "+ Math.max(1,4,6,9)+"<br>"+
    "Valor minimo: "+ Math.min(1,4,6,9)+"<br>"+
    "Conseno Pi: " +Math.cos(Math.PI)+"<br>";   
}
function funcionesString() {
    var texto="JavaScript estructuras de Cadena de Texto";
    document.getElementById('resultado').innerHTML=
    "*Minuscula: " + texto.toLocaleLowerCase()+"<br>"+
    "Mayuscula: " + texto.toLocaleUpperCase()+"<br>"+
    "Localizacion de caracteres @: " + texto.indexOf('@')+"<br>"+
    "*Logintud de una cadena de texto: " + texto.length +"<br>"+
    "Unicode: " + String.fromCharCode(960)+"<br>"+
    "Valor del Unicode" + texto.charCodeAt(texto.indexOf('J'))+"<br>";

    
}
function funcionesDate() {
    var fecha = new Date();
    //Orientado a Objetos
    document.getElementById('resultado').innerHTML=
    "*Fecha: "+ fecha.toLocaleDateString()+"<br>"+
    "Hora: "  +fecha.toLocaleTimeString() +"<br>"+
    "Minutos: "+ fecha.getMinutes()+"<br>"+
    "Segundos: " + fecha.getSeconds()+"<br>"+
    "Milisegundos: " + fecha.getMilliseconds()+"<br>"+
    "*Mes: "+ parseInt(fecha.getMonth()+1)+"<br>"+
    "*Dia: "+ fecha.getDay();
  
    
}