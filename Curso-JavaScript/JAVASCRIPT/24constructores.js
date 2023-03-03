//Función constructor 
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
    }
}
function Persona2(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;}
Persona.prototype.tel = "324253456"
let padre = new Persona("Juan","Pérez","tuvieja@mail.com");
console.log(padre);
console.log(padre.tel);
let madre = new Persona("Laura","Quintero","lquintero@mail.com");
console.log(madre);
console.log(madre.tel);
padre.tel = "456475864"
console.log(padre.tel);
padre.nombre = "Carlos";
console.log(padre);
console.log(padre.nombreCompleto());


console.log(madre.nombreCompleto());
let miObjeto= new Object();
let miObjeto2 = {};
let miCadena1= new String("");//formal no recomendable
let miCadena2= "";//forma informal recomendable
let niNumero1 = new Number(1);
let miNumero2 = 1;
let miBoolean1 = new Boolean(false);
let miBoolean2 = false;
let miArreglo1 = new Array();
let miArreglo2 = [];
let miFuncion1 = new Function();
let miFuncion2 = function(){};

//Uso del call para usar el metodo de otro objeto
let persona1= {
    nombre : "Carlos",
    apellido : "Lara",
    nombreCompleto1: function(titulo,telefono){
        return titulo + ": "+ this.nombre + " " + this.apellido + " " + telefono ;
    }
}
let persona2 = {
    nombre : "miguel",
    apellido : "Del Hoyo"
}

console.log(persona1.nombreCompleto1());
console.log(persona1.nombreCompleto1.call(persona2, "ing","4355553"));
//uso de Apply 
let arreglo = ["Lic.","43564745654"];
console.log(persona1.nombreCompleto1.apply(persona2,arreglo));