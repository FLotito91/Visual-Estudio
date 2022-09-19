let numero = 5;

let numeroTexto = "valor desconocido"

switch(numero){
    case 1: 
        numeroTexto= "numero 1";
        break;
    case 2:
        numeroTexto = "numero 2";
        break;
    case 3:
        numeroTexto = "numero 3";
        break;
    default:
        numeroTexto = "caso no encontrado"
}
console.log(numeroTexto);


let mes = 6; 
let estacion= "estacion desconocida"
switch(mes){
    case 1 || 2 || 12:
        estacion= "invierno";
        break;
    case 3: case 4: case 5:
        estacion = "primavera";
        break;
    case 6: case 7: case 8:
        estacion = "verano";
        break;
    case 9: case 10: case 11:
        estacion = "otoño";
        break;
    default:
        estacion
}
console.log(estacion);