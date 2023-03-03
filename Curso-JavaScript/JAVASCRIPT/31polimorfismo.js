class Empleado{
    constructor(nombre,sueldo){
        this._nombre = nombre ;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: \n nombre: ${this._nombre}\n sueldo: $${this._sueldo}`;
    }
    
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        
        super(nombre,sueldo);
        this._departamento = departamento;
        }
        obtenerDetalles(){
            return `Gerente \n${super.obtenerDetalles()} \n Departamento: ${this._departamento} `;
    }
}
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto, de tipo Gerente");
        console.log(tipo._departamento);
    }
    else if (tipo instanceof Empleado){    
            console.log("Es un objeto, de tipo empleado");
    }
    else if (tipo instanceof Object){
        console.log("Es un objeto, de tipo Object");
    }
    
}

let gerente1 = new Gerente("Miguel",199.999,"Sistemas");
let empleado1 = new Empleado("Roberto", 110.998);
determinarTipo(empleado1);
determinarTipo(gerente1);