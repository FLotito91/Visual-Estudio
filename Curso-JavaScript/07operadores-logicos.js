//Ejemplo AND (&&)
let a =5;
let valMin = 0;
let valMax = 10;

if (a >= valMin && a <=valMax){
    console.log("Dentro del rango");
}
else{
    console.log("Fuera de rango");
}
//Ejemplo OR(||) ambos valores deben ser true
let vacaciones =true, diaDescanso = false;
if ( vacaciones || diaDescanso ){
    console.log("El padre puede asistir al juego del hijo");
}
else{
    console.log("El padre está ocupado");
}