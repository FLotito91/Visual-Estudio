//No es posible crear objetos antes de declarar las clases
//No se aplica el concepto de hoisting
//let persona3 = new Persona ("juan","carlos");
class Persona{
    static contadorPersonas= 0;//atributos de nuestra clase
    static get MAX_OBJ(){
        return 5;
    }
    email = "valor default email"//atributo de nuestros objetos
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas< Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;//preincremento para no comenzar en 0.

        }
        else{
            console.log("Se supera máximo de objetos permitidos")
        }
    }
    //Métodos get y set en clases.
    get nombre(){
    return this._nombre;
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
    nombreCompleto(){
        return this.idPersona +" "+ this._nombre + " " + this._apellido;
    }
    //Sobreescribiendo el método de la clase Padre(Object)
    toString(){
        //Se aplica polimorfismo.(múltiples formas en 
        // en tiempos de ejecucipon)
        //El método que se ejecuta depende si es una 
        //referencia  de tipo padre o de tipo hijo.
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde método static")
    }
    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido);
    }
}

//instancia de clase u objeto
let persona1 = new Persona("Juan","Perez");
console.log(persona1.toString());

 //Llamando al get
console.log(persona1.nombre);
persona1._nombre = "Roberto"
console.log(persona1.nombre);

//Herencia en js.
class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this.departamento = departamento;
    }
    //Sobreescritura.
    nombreCompleto(){
        return super.nombreCompleto() +", "+this._departamento;
    }
}



let empleado2= new Empleado("María","Gimenez","Sistemas");
console.log(empleado2);
console.log(empleado2.nombre);
console.log(empleado2.nombreCompleto());
console.log(empleado2.toString());
//persona1.saludar(); no se puede llamar static desde obj. 
Persona.saludar();
Persona.saludar2(persona1);
Empleado.saludar2(empleado2);
console.log(persona1.contadorPersonas);
console.log(Persona.contadorPersonas);//se hereda a clase hija

console.log(persona1.email);
console.log(Persona.MAX_OBJ);
let persona3= new Persona("Mariano","Toledo");
let persona4= new Persona("Carlos","Gutierrez");
let persona5= new Persona("Federico","Jesús");
let persona6 = new Persona("Roberto","Zapata");
console.log(persona6.toString());