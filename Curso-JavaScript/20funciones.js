/*
La palabra reservada function 
lleva la función a la parte superior
del archivo
*/
miFuncion(2,9);
//Declaración de función
function miFuncion(a,b){
    //console.log("suma" +": "+ (a+b));
    console.log(arguments.length);
    return a+b;
}

let resultado = miFuncion(2,3);
console.log(resultado);
//Declaración Función tipo Expresión.
let sumar = function(a,b){return a+b};
resultado= sumar(1,2);
console.log(resultado);

(function(a,b){
    console.log("ejecutando la función: "+ (a+b));
})(3,4);
console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
//console.log(miFuncionTexto);

//Declaración Función tipo Flecha.
const sumarFuncionFlecha = (a,b) => a+b;
console.log(sumarFuncionFlecha(2,6));
//parametros lista de variables que definimos en la función
//argumentos valores que toman los parámetros al llamar a la función.

let sumatoria = function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2])
    return a+b+arguments[2]
}
resultado= sumatoria(3,2,7);
console.log(resultado)