function miFuncion(){
    console.log('Saludos desde mi función')
}
miFuncion();

//const miFuncionFlecha = ()=>{
//    console.log('Otra función flecha')
//}

//const miFuncionFlecha = () => console.log('saludos desde mi función flecha 2');
//miFuncionFlecha();


//const saludar = ()=>{
//    return 'saludos desde función flecha'
//}


const saludar = () =>  'saludos dsesde mi función flecha ';
console.log(saludar());

const regresaObjeto = ()=>({nombre: 'juan', apellido: 'Lara'});

console.log(regresaObjeto());

//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('saludos con parámetros');

//const funcionConVariosParametros = (op1,op2) => op1+op2;
const funcionConVariosParametros = (op1,op2) => {
    let resultado = op1+op2;
    return resultado;
}
console.log(funcionConVariosParametros(2,6));