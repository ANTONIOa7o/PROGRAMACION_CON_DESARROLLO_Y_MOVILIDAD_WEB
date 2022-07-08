var estiloBorde=false;//No tiene borde
var estiloColor=false;
var estiloSombra=false;


function borde() {

if(estiloBorde==false){
    document.getElementById('cuadrado').style.border="5px solid #0d47a1";
    estiloBorde= true;
}else{
    document.getElementById('cuadrado').style.border="none";
    estiloBorde=false;
}


    
}

function color() {
/*
Cambio el color de rosa a azul y de azul a rosa
*/
if(!estiloColor){
    document.getElementById('cuadrado').style.backgroundColor="pink";
    estiloColor=true;
}else{
    document.getElementById('cuadrado').style.backgroundColor="#2196f3";
    estiloColor=false;
}

}

    


function sombra() {
    if(!estiloSombra){
        document.getElementById('cuadrado').className= "sombra";
       
    }else{
        document.getElementById('cuadrado').className= null;
      
    }
    
estiloSombra=!estiloSombra;
    /*
    Al hacer el recorrido de la funcion cuando acaba de elegir la sentencia true,
    sigue dentro de la funcion un cambio de estado en el estiloSombra. Obliga a llevar 
    el cambio de true a false
    */
}