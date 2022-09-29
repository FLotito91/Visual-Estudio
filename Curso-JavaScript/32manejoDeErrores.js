'use strict'

try{

    //x=10;
    miFuncion();
}
catch(error){
    console.log(error)
    throw 'Mi error'
    
}
finally{
    console.log('termina la revisión de erorres. Errores encontrados ') 
}

console.log('continuamos...')