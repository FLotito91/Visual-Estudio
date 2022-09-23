class Persona {
    static _idPersona= 0;
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido=apellido;
        this._edad = edad;
        this._idPersona = ++Persona.idPersona;
    }
    get idPersona(){
        Persona.idPersona = ++_idPersona;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this.edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return `
        ID persona: ${this._idPersona}. 
        Nombre: ${this._nombre}. 
        Apellido: ${this._apellido}. 
        Edad: ${this._edad}`;

    }
}



let persona1 = new Persona("Juan","Carlos",12);
console.log(persona1);
console.log(persona1.toString());
let empleado1 = new Empleado("Roberto","Carlos",34,102000);
console.log(empleado1.toString());
let cliente1 = new Cliente("Miguel","Angel",15)
console.log(cliente1.toString());