miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('funcion 1');
}
function miFuncion2(){
    console.log('funcion 2 ');
}

//función de tipo callback

function imprimir(mensaje){
    console.log(mensaje)
}


function sumar (op1,op2,funcionCallBack){
    let res = op1+op2;
    funcionCallBack(`Resultado : ${res}`);
}

sumar(5,3,imprimir);

//Llamadas asíncronas con uso setTimeout

function miFucionCallback(){
    console.log('saludo asíncrono después de 3 seg');
}
setTimeout(miFucionCallback,3000);//después de 3 seg.

setTimeout(function(){console.log('saludo asíncrono después de 4 seg')},4000);

setTimeout(()=>{console.log('saludo asíncrono después de 5 seg')},5000);

let reloj = ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj, 10000);//1seg