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
//miFuncionConPromesa().then(valor => console.log(valor));

// async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise((resolver) => {
        resolver ("Promesa con await")
    })
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

//promesas, await, async y setTimeout
async function funcionConPromesaAwaiTimeout(){
    console.log("inicio de función")
    let miPromesa = new Promise(resolver => {
        setTimeout(()=>resolver("Promesa con await y time out", 3000));
    });
    console.log(await miPromesa);
    console.log("fin de la función")
}

funcionConPromesaAwaiTimeout()

//await solo puede ser llamada mediante una función async. 
