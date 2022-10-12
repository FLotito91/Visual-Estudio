let miPromesa = new Promise((resolved,rejected)=>{
    let expresion = true;
    if (expresion)
        resolved('Resolvió correctamente');
    else 
        rejected('Se produjo un error')
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//miPromesa
//.then(valor => console.log(valor))
//.catch(error=>console.log(error))

let promesa = new Promise((resolver) => {
    //console.log('inicio promesa')
    setTimeout( ()=> resolver('saludos con promesa y timeout'),3000);
    //console.log('fin promesa')
});

//promesa.then(valor =>  console.log(valor));

//async indica que una función regresa una promesa.
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
};
miFuncionConPromesa().then(valor => console.log(valor));