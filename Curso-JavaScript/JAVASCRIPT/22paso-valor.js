//Valor de tipo primitivo
let x = 10;

function cambiarValor (a){
    a = 20;
    //return lo asigna de manera automática
}
//Paso por Valor
cambiarValor(x);
console.log(x);

//Paso por Referencia
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}
console.log(persona)
//Pasando la referencia
function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido= "Lara";
}

cambiarValorObjeto(persona);
console.log(persona)