/*'use strict'

try{

    let x = 10;
    //miFuncion();
    throw 'Mi error'
}
catch(error){
    console.log(error)
}
finally{
    console.log('termina la revisión de erorres. Errores encontrados ') 
}

console.log('continuamos...')*/
"use strict"
let resultado = 0;

try {
    //x=10;
    if (isNaN(resultado)) throw "No es un número.";
    else if (resultado==='') throw 'Es una cadena vacía';
    else if (resultado >=0) throw 'valor positvo';
    else if (resultado<0) throw 'valor negativo'
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revisión de errores.');
}