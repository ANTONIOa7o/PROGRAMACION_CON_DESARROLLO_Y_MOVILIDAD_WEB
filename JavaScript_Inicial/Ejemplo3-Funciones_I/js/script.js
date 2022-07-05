var n1= parseInt(window.prompt("Introduce el primer numero:"));
var n2=parseInt(window.prompt("Introduce el segundo numero"));

function sumar(n1,n2) {
    var resultado = n1+n2;
    swal("La Suma es: " + resultado);   
}
function restar(n1,n2) {
    //Accedo a las variables globales
    swal("La Resta es: " + (n1-n2));
    
}
function multiplicar(n1,n2) {
    swal("La Multiplicación es: " + (n1*n2));
}
function dividir(n1,n2) {
    swal("La División es: " + (n1/n2));
}
