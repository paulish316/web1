var intentos = 0;
var respuestaCorrecta= 42;
var acierto= false;

while(intentos<4 && acierto == false ){
var respuestaIngresada= prompt ("ADIVINANZA: ¿Cuántos dientes tiene un perro adulto?");
intentos++;

if ( respuestaIngresada == respuestaCorrecta ){
    alert("Felicidades, acertaste en "+intentos+ " intentos ");
    acierto= true;

    }
else {
    switch(intentos){
        case 1:
            alert(" La respuesta es incorrecta, te quedan 3 intentos.")
            break;
        case 2:
            alert(" La respuesta es incorrecta, te quedan 2 intentos.  PISTA: la repuesta está entre 40 y 50")
            break;			
        case 3:
            alert(" La respuesta es incorrecta, te queda 1 intento.    PISTA: la repuesta está entre 40 y 45")
            break;			
        case 4:
            alert(" La respuesta es incorrecta, te quedaste sin intentos")
            break;			
      
    
    
     }    
}

}






